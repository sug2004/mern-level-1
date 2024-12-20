# MERN Level 1

MERN Level 1 is a robust platform designed for retailers to efficiently upload, manage, and update product details. This web application simplifies inventory management by allowing retailers to add, update, and delete product information, ensuring a streamlined workflow.

## Live Demo
Check out the live deployment of the application here:
**[MERN Level 1 Live App](https://mern-level-1.onrender.com)**

---

## Features
- **Product Upload:** Retailers can add product details, including:
  - Product Name
  - Price
  - Description
  - Product Images
  - Category and Tags

- **Product Management:**
  - Edit and update existing product information.
  - Modify product images and descriptions in real time.
  - Update pricing and availability status.

- **Product Deletion:**
  - Remove products from the platform with confirmation prompts to avoid accidental deletions.

- **User Authentication:**
  - Secure login and registration for retailers.
  - Password encryption and session management.

- **Responsive Design:**
  - Fully responsive design ensuring compatibility with desktops, tablets, and mobile devices.

- **Real-Time Notifications:**
  - Receive alerts when product details are successfully added, updated, or deleted.

---

## Tech Stack
**Frontend:** React.js with Redux for state management  
**Backend:** Node.js, Express.js for API handling  
**Database:** MongoDB for data storage  
**Authentication:** JWT (JSON Web Token) for secure access

---

## Installation
Follow these steps to run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sug2004/mern-level-1.git
   cd mern-level-1
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   The application should now be running on `http://localhost:5000`.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with detailed descriptions of your changes.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any inquiries, reach out through the repository's issue tracker or email the project maintainer.

Happy Coding! 🚀

