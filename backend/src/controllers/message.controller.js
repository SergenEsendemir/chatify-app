import Message from '../models/Message.js';
import User from '../models/User.js';

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');
    res.status(200).json(filteredUsers);
  } catch (err) {
    console.log('Error in getAllContacts:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const message = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(message);
  } catch (err) {
    console.log('Error in getMessagesByUserId:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
    const { text, image } = req.body;

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // todo: send message in real-time if user is online -socket.io

    res.status(201).json(newMessage);
  } catch (err) {
    console.log('Error in sendMessage:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //find all the messages where the logged-in user is either the sender or receiver

    const messages = await Message.find({
      $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }],
    });

    const chatPartnerIds = [
      ...new Set(
        messages.map((msg) => {
          if (msg.senderId.toString() === loggedInUserId.toString()) {
            return msg.receiverId.toString();
          } else {
            return msg.senderId.toString();
          }
        })
      ),
    ];

    const chatPartners = await User.find({
      _id: { $in: chatPartnerIds },
    }).select('-password');

    res.status(200).json(chatPartners);
  } catch (err) {
    console.log('Error in getChatPartners:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
