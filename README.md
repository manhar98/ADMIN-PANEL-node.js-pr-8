# Admin Panel Backend API

A complete Admin Panel Backend built using **Node.js, Express.js, MongoDB, and Mongoose**. This project provides secure Admin Authentication, JWT Authorization, Dashboard Statistics, and complete CRUD (Create, Read, Update, Delete) operations for user management.

## 🚀 Project Features

- Admin Registration
- Admin Login
- JWT Authentication
- Secure Password Hashing using bcryptjs
- Protected Admin Routes
- Admin Profile API
- Dashboard Statistics
- Create New Users
- Get All Users
- Get Single User by ID
- Update User Details
- Delete Users
- MongoDB Database Integration
- RESTful API Architecture
- Postman API Testing

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| dotenv | Environment Variables |
| CORS | Cross-Origin Resource Sharing |
| Postman | API Testing |
| Nodemon | Development Server |

## 📁 Project Structure

```text
MAKE-ADMIN-PANEL/
│
├── config/
│   └── db.js
│
├── models/
│   ├── Admin.js
│   └── User.js
│
├── controllers/
│   └── adminController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   └── adminRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Folder

```bash
cd MAKE-ADMIN-PANEL
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/admin_panel

JWT_SECRET=your_secret_key

NODE_ENV=development
```

For MongoDB Atlas, replace the local MongoDB connection string with your Atlas connection string.

### 5. Start Development Server

```bash
npm run dev
```

### 6. Start Production Server

```bash
npm start
```

Server URL:

```text
http://localhost:5000
```

## 🔐 Admin Authentication APIs

Base URL:

```text
http://localhost:5000/api/admin
```

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register Admin |
| POST | /login | Admin Login |
| GET | /profile | Get Admin Profile |
| GET | /dashboard | Dashboard Statistics |

## 👥 User CRUD APIs

All User APIs require a valid Admin JWT Token.

| Method | Endpoint | Description |
|---|---|---|
| POST | /users | Create New User |
| GET | /users | Get All Users |
| GET | /users/:id | Get Single User |
| PUT | /users/:id | Update User |
| DELETE | /users/:id | Delete User |

## 🧪 Postman API Testing

### Admin Registration

**POST**
```text
/api/admin/register
```

Request Body:

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Admin Login

**POST**
```text
/api/admin/login
```

Request Body:

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

Copy the JWT Token received in the login response.

### Authorization

For protected APIs:

1. Open Postman.
2. Select Authorization.
3. Choose Bearer Token.
4. Paste the Admin JWT Token.
5. Send the API request.

### Create User

**POST**
```text
/api/admin/users
```

Request Body:

```json
{
  "name": "Manhar",
  "email": "manhar@gmail.com",
  "password": "123456",
  "phone": "9876543210",
  "status": "active"
}
```

### Get All Users

**GET**
```text
/api/admin/users
```

### Get Single User

**GET**
```text
/api/admin/users/USER_ID
```

### Update User

**PUT**
```text
/api/admin/users/USER_ID
```

Request Body:

```json
{
  "name": "Manhar Zapadiya",
  "email": "manhar@gmail.com",
  "phone": "9999999999",
  "status": "inactive"
}
```

### Delete User

**DELETE**
```text
/api/admin/users/USER_ID
```

## 📊 Dashboard Statistics

The Dashboard API provides:

- Total Users
- Active Users
- Inactive Users
- Total Admins

**GET**
```text
/api/admin/dashboard
```

## 🗄️ Database Collections

MongoDB Database: `admin_panel`

Collections:

- `admins` – Stores Admin Information.
- `users` – Stores User Information.

Passwords are hashed before storing them in MongoDB.

## 🔒 Security Features

- JWT-based Authentication
- Protected Admin Routes
- Password Hashing with bcryptjs
- Environment Variables for Sensitive Configuration
- Email Uniqueness Validation
- Input Validation

## 👨‍💻 Author

**Manhar Zapadiya**

GitHub: [https://github.com/manhar98/ADMIN-PANEL-node.js-pr-8.git](https://github.com/manhar98/ADMIN-PANEL-node.js-pr-8.git)
