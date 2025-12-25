[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Socket.io](https://img.shields.io/badge/Socket.io-real--time-black)](https://socket.io/)
![License](https://img.shields.io/badge/license-MIT-green)

# 💬 Chatify App

**Chatify** is a modern, full-stack chat application built with **React** and **Node.js**.  
It focuses on performance, scalability, and security, offering real-time messaging, image sharing, and a clean, modern UI.

---

## 🚀 Features

- 🔐 Authentication (JWT-based)
- 💬 One-to-one chat system
- ⚡ Real-time messaging with Socket.io
- 🔔 Message notifications & sound alerts (real-time)
- 🖼️ Image upload with Cloudinary
- ♾️ Infinite scroll (cursor-based pagination)
- 🛡️ Security with Arcjet (rate limiting & bot protection)
- 🎨 Modern UI with Tailwind CSS
- 🤖 Automated PR reviews with CodeRabbit AI

---

## 🧱 Tech Stack

### Frontend

- React
- Tailwind CSS
- Zustand
- Fetch API
- Socket.io Client

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.io

### Third-Party Services

- Cloudinary (image hosting)
- Arcjet (security & bot protection)
- CodeRabbit AI (automated code reviews)

---

## ⚡ Real-Time Communication (Socket.io)

Chatify uses **Socket.io** to enable real-time communication between users,ensuring instant message delivery and live UI updates.

### Supported real-time features:

- Instant message delivery
- Online / offline user detection
- Message notifications
- Message sound alerts
- Real-time UI updates without page refresh

### Architecture overview:

- Socket.io server runs alongside the Express backend
- Clients establish a persistent WebSocket connection
- Events are emitted on:
  - Message send
  - Message receive
  - User connect / disconnect

This approach ensures low-latency messaging and a smooth chat experience.

---

## 📂 Project Structure

```text
chatify-app/
├── backend/
│   ├── controllers/
│   ├── emails/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── lib/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── hooks/
│   ├── lib/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SergenEsendemir/chatify-app.git
cd chatify-app
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create a .env file (example):

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development

JWT_SECRET=your_jwt_secret_key

RESEND_API_KEY=your_resend_api_key

EMAIL_FROM=your_email_from
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

Run backend:

```bash
npm run dev
```

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔄 API Overview

### Authentication

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Chat

- `GET /api/messages/chats`
- `GET /api/messages/contacts`
- `POST /api/messages/send/:id`

> Detailed API documentation is intentionally omitted from the README
> and can be found in the API specification or Swagger documentation.

### Image Upload

- Images are uploaded directly from frontend to Cloudinary
- Backend only stores image URLs
- Optimized for slow network connections

---

## ♾️ Infinite Scroll (Cursor-Based Pagination)

This project uses cursor-based pagination instead of classic `page/limit` pagination.

### Why cursor-based pagination?

- Better performance on large datasets
- No data shifting issues
- Ideal for chat message history and user lists

---

## 🛡️ Security

- Rate limiting and bot detection via Arcjet
- Spoofed bot inspection
- Password hashing with bcrypt
- Sensitive fields (like passwords) are excluded from API responses
- Protected routes using JWT middleware

---

## 🤖 CodeRabbit AI

This repository is integrated with CodeRabbit AI for automated pull request reviews.

To manually trigger a review on an existing PR:

```text
@coderabbitai review
```

---

## 📌 Development Notes

- Self-messages are filtered at the database level
- Chat partners are deduplicated using unique user IDs
- Real-time updates are handled via Socket.io
- Message notifications and sound alerts enhance user experience
- Backend is structured to be easily extensible
- Image uploads are optimized for unstable or slow connections

---

## 🔮 Future Improvements

- Group chats
- Message reactions
- Typing indicators
- Read receipts
- Push notifications
- Media previews

---

## 👨‍💻 Author

### Sergen Esendemir

GitHub: [https://github.com/SergenEsendemir](https://github.com/SergenEsendemir)

---

## 📄 License

This project is licensed under the MIT License.
