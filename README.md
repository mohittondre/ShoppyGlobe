# 🛒 ShoppyGlobe – Basic E-Commerce Application

ShoppyGlobe is a basic e-commerce web application built using **React + Vite**.
The project demonstrates core React concepts such as **component-based architecture, routing, Redux state management, API integration, and performance optimization**.

This project was developed as part of an academic assignment.

---

## 🚀 Live Overview

ShoppyGlobe allows users to:

* Browse products fetched from an external API
* Search products using a global search bar
* View detailed information about a product
* Add products to a cart
* Modify cart quantities and remove items
* Proceed to checkout and place a dummy order

---

## 🛠️ Tech Stack

* **Frontend:** React (with Vite)
* **State Management:** Redux Toolkit
* **Routing:** React Router (`createBrowserRouter`)
* **Styling:** CSS
* **API:** [https://dummyjson.com/products](https://dummyjson.com/products)

---

## 📁 Project Structure

```
src/
│── app/
│   └── store.js
│
│── features/
│   ├── cart/
│   │   └── cartSlice.js
│   └── products/
│       └── searchSlice.js
│
│── hooks/
│   └── useFetchProducts.js
│
│── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
│
│── routes/
│   └── router.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## ✨ Features Implemented

### 🔹 Component Structure

* App
* Header (Navigation + Search + Cart count)
* ProductList
* ProductItem
* ProductDetail
* Cart
* CartItem
* Checkout
* NotFound (404 page)

---

### 🔹 Data Fetching

* Products are fetched using a **custom hook (`useFetchProducts`)**
* API: `https://dummyjson.com/products`
* Error handling implemented for failed API requests

---

### 🔹 State Management (Redux)

* Cart state managed using **Redux Toolkit**
* Actions implemented:

  * Add to cart
  * Remove from cart
  * Increase / decrease quantity (minimum 1)
  * Clear cart after checkout
* Global **search state** implemented using Redux

---

### 🔹 Search Functionality

* Search input located in the navbar
* Uses Redux state
* Filters products in real time based on product title

---

### 🔹 Routing

* Implemented using `createBrowserRouter`
* Routes:

  * `/` → Home (Product List)
  * `/product/:id` → Product Detail (dynamic route)
  * `/cart` → Cart Page
  * `/checkout` → Checkout Page
  * Unknown routes → 404 Page

---

### 🔹 Cart & Checkout

* Cart page displays all added items
* Quantity controls (+ / –)
* Order summary with total price
* Checkout page collects dummy user details
* On placing order:

  * Displays “Order placed” message
  * Clears cart
  * Redirects to home page

---

### 🔹 Performance Optimization

* Code splitting using `React.lazy` and `Suspense`
* Lazy loading for images

---

### 🔹 Styling

* Custom CSS for:

  * Navbar
  * Product cards
  * Product detail page
  * Cart page
  * Checkout page
* Fully responsive design

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mohittondre/ShoppyGlobe
```

### 2️⃣ Navigate to project directory

```bash
cd ShoppyGlobe
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 📌 Submission Notes

* Project created using **Vite (mandatory)**
* `node_modules` folder is removed before submission
* Repository contains **25+ meaningful commits**
* Code is properly indented and commented
* GitHub repository link is included in this README

---

## 🔗 GitHub Repository

👉 **GitHub Repo Link:**
https://github.com/mohittondre/ShoppyGlobe

---

## 👨‍💻 Author

**Mohit Tondre**
Frontend / MERN Stack Developer

---

## ✅ Final Note

This project focuses on **core React fundamentals** and best practices.
All features were implemented manually without using UI libraries to ensure originality.

---
