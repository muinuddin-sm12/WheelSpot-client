# WheelSpot (A car shop)

## Project Overview

The Wheelspot is a responsive e-commerce platform that allows users to view, search, and purchase cars. It also provides a role-based authentication system with user and admin roles. Admins can manage products, users, and orders, while regular users can view product details, place orders, and manage their profiles.

## 🔗 Live Demo

- Frontend: [wheel-spot-client.vercel.app](https://wheel-spot-client.vercel.app)
- Backend Repo: [WheelSpot-server](https://github.com/muinuddin-sm12/WheelSpot-server)

## Key Features

### User Registration & Authentication
- Users can register with their name, email, and password.
- By default, registered users are assigned the "user" role.
- Admins can manage the user roles.
- Secure authentication with JWT (JSON Web Token) to handle user sessions.

### Public Routes
- **Home Page**: Includes a Navbar, Banner, Featured Products, Footer, and other relevant content like testimonials or blogs.
- **All Products Page**: Allows users to search and filter products by various attributes (price range, model, brand, category, availability).
- **Product Details Page**: Displays detailed information about a specific product with an option to "Buy Now".
- **About Page**: Provides information about the shop and its mission.

### Private Routes
- **Checkout Page**: Users can place orders with validation on product stock.
- **Admin Dashboard**: Manage users, products, and orders.
- **User Dashboard**: View order history, manage account settings, and update passwords.

### UI/UX Design
- The platform is fully responsive and works seamlessly on all screen sizes.
- User-friendly error messages and loading states are displayed during API calls.
- Toast notifications for actions like successful login or order placement.

### Error Handling
- Proper error messages for invalid login, registration errors, and failed operations (e.g., out-of-stock products).

### Payment Integration
- Integrated **SurjoPay** as the payment gateway to process transactions.

## Technology Stack

- **Frontend**: 
  - TypeScript
  - React
  - Redux
  - React Router
  - Tailwind CSS (for styling)
  - RTK Query (for data fetching)
  - Axios (for API requests)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for data storage)
  - JWT (for authentication)
  - Mongoose (for MongoDB interactions)
  - Stripe / SurjoPay (for payment integration)

## Setup Instructions

### 1. Clone the Repositories

Clone both the **frontend** and **backend** repositories to your local machine.

```bash
git clone <https://github.com/muinuddin-sm12/WheelSpot-client>
git clone <https://github.com/muinuddin-sm12/WheelSpot-server>
