# 🍣 Sushi Club — Online Food Ordering App

Sushi Club is a modern and responsive online food ordering web application built with **React, Vite, Tailwind CSS, Node.js, Express, and MongoDB**.

The application allows customers to browse sushi products, add items to their cart, place orders, and track their orders. It also includes an admin panel where restaurant administrators can view, manage, update, and print customer orders.

---

## 🌟 Features

### 👨‍🍳 Customer Features

* Modern sushi-themed homepage
* Full-width hero image slider
* Sushi-focused menu
* Responsive product cards
* Product images optimized for web performance
* Add products to cart
* Increase or decrease product quantity
* Remove individual products from cart
* Clear entire cart
* Automatic cart total calculation
* Responsive shopping cart
* Checkout form
* Customer name, phone number, and delivery address
* Order placement through the backend API
* Order confirmation
* Automatic redirect to order tracking
* Order tracking using a unique tracking token
* Responsive design for mobile, tablet, and desktop devices

---

## 🛠️ Admin Features

The application includes an admin dashboard for restaurant management.

### Admin Login

Administrators can securely log in through the admin login page.

### Order Management

Admins can:

* View all customer orders
* Search orders
* Filter orders by status
* View customer information
* View ordered products
* View order quantities
* View order totals
* Update order status
* Print kitchen orders
* View today's order count
* View today's total sales
* Logout from the admin panel

### Order Statuses

Orders can be managed using the following statuses:

* Pending
* Accepted
* Preparing
* Out for Delivery
* Completed
* Cancelled

---

## 📦 Order Tracking

Every successfully placed order receives:

* An order number
* An order status
* A unique tracking token

Customers can use the tracking page to check the current status of their order.

The application automatically redirects customers to the tracking page after successfully placing an order.

---

## 🎨 UI & Design

The application uses a modern restaurant-style interface with:

* Dark and light color combinations
* Sushi-themed yellow accent colors
* 3D-style buttons
* Card shadows
* Hover animations
* Responsive layouts
* Mobile-friendly components
* Full-width hero slider
* Clean product cards
* Responsive checkout and cart sections

The interface is designed to provide a simple and enjoyable food-ordering experience.

---

## ⚡ Performance

Performance has been considered throughout the project.

The product images use optimized **WebP** versions to reduce image size and improve loading performance.

Images are loaded using browser-friendly techniques such as:

* Lazy loading
* Async image decoding
* Optimized image formats
* Responsive layouts

This helps reduce unnecessary loading and improves the scrolling experience.

---

## 🧩 Project Structure

```text
First-Mini-Project/
│
├── backend/
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Order.js
│   │   └── Product.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── public/
│   ├── menu01.webp
│   ├── menu02.webp
│   ├── menu03.webp
│   ├── menu04.webp
│   ├── menu05.webp
│   ├── menu06.webp
│   └── other images
│
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Products.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── AdminLogin.jsx
│   ├── AdminOrders.jsx
│   ├── App.jsx
│   ├── ProtectedRoute.jsx
│   ├── TrackOrder.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔄 Application Flow

### Customer Flow

```text
Home
  ↓
Browse Sushi Menu
  ↓
Add Products to Cart
  ↓
Adjust Quantity
  ↓
Checkout
  ↓
Place Order
  ↓
Backend API
  ↓
MongoDB
  ↓
Order Created
  ↓
Track My Order
```

### Admin Flow

```text
Admin Login
  ↓
Admin Dashboard
  ↓
View Orders
  ↓
Search / Filter Orders
  ↓
Update Order Status
  ↓
Print Order
```

---

## 💻 Technologies Used

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* React Context API

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB

### Database

* MongoDB Atlas

### Development Tools

* Git
* GitHub
* Vercel
* VS Code

---

## 🔐 Environment Variables

Environment variables are used to keep sensitive information outside the source code.

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```

The frontend uses this variable to communicate with the backend API.

### Backend `.env`

The backend contains the MongoDB connection information and other private configuration values.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

**Do not commit actual `.env` files or database credentials to GitHub.**

The `.gitignore` file is configured to keep environment files private.

---

## 🚀 Local Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd First-Mini-Project
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Install backend dependencies

```bash
cd backend
npm install
```

### 5. Configure backend environment variables

Create a `.env` file inside the `backend` folder.

```env
MONGO_URI=your_mongodb_connection_string
```

### 6. Configure frontend environment variables

Create a `.env` file in the frontend project root.

```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

### Start the backend

Inside the `backend` folder:

```bash
npm start
```

or use the appropriate development command configured in `package.json`.

The backend runs on:

```text
http://localhost:5000
```

### Start the frontend

From the project root:

```bash
npm run dev
```

The Vite development server will provide the frontend URL in the terminal.

---

## 🧪 Production Build

Before deployment, test the production build:

```bash
npm run build
```

If the build completes successfully, the frontend is ready for deployment.

---

## ☁️ Deployment

The project can be deployed using:

* **Vercel** for the frontend
* **Vercel or another Node.js hosting platform** for the backend
* **MongoDB Atlas** for the database

When deploying the frontend, update the environment variable:

```env
VITE_API_URL=YOUR_DEPLOYED_BACKEND_URL
```

The production frontend should never use:

```text
http://localhost:5000
```

---

## 🔒 Security Notes

* Never expose MongoDB credentials in frontend code.
* Never commit `.env` files to GitHub.
* Keep database connection strings on the backend.
* Protect admin routes using authentication.
* Use environment variables for sensitive configuration.
* Do not store private API credentials directly in React components.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile phones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

The layout automatically adapts to different screen sizes using responsive Tailwind CSS classes.

---

## 🛒 Main Application Sections

### Home

The homepage contains the main navigation, hero slider, and restaurant introduction.

### Menu

Customers can browse available sushi dishes and add them to their cart.

### Cart

Customers can:

* Review selected items
* Change quantities
* Remove products
* Clear the cart
* View the total amount

### Checkout

Customers provide:

* Name
* Phone number
* Delivery address

After placing an order, they are redirected to the order tracking page.

### About Us

Provides information about Sushi Club and the restaurant concept.

### Contact Us

Provides customer contact information and communication details.

### Footer

Contains additional navigation and restaurant information.

### Order Tracking

Customers can track their order using the unique tracking token.

### Admin Panel

Restaurant administrators can manage customer orders from the admin dashboard.

---

## 📊 Order Management

Orders are stored in MongoDB and contain information such as:

* Order number
* Customer information
* Ordered products
* Product quantities
* Total amount
* Order status
* Tracking token
* Creation date

This allows both customers and administrators to interact with the same order data.

---

## 🎯 Project Goal

The goal of Sushi Club is to provide a complete restaurant ordering experience where customers can easily discover sushi dishes, place orders, and track their deliveries while restaurant administrators can efficiently manage incoming orders.

The project demonstrates the integration of a modern React frontend with a Node.js/Express backend and MongoDB database.

---

## 📌 Future Improvements

Possible future improvements include:

* Online payment integration
* Customer accounts
* Order history
* Restaurant analytics dashboard
* Product management from the admin panel
* Add/edit/delete menu products
* Product categories
* Customer reviews and ratings
* Email/SMS order notifications
* Real-time order status updates
* Delivery location integration

---

## 👨‍💻 Project

**Sushi Club — Online Sushi Ordering Application**

Built as a full-stack web development project using modern frontend and backend technologies.

```
```
