Project Name: VEHICLE RENTAL SERVICE
Live Link: https://vehicle-rental-services.vercel.app/

Features : 
  1. Vehicles - Manage vehicle inventory with availability tracking.
  2. Customers - Manage customer accounts and profiles.
  3. Bookings - Handle vehicle rentals, returns and cost calculation.
  4. Authentication - Secure role-based access control

Technology Queue :
  1. Node.js + TypeScript
  2. Express.js (web framework)
  3. PostgreSQL (database)
  4. bcrypt (password hashing)
  5. jsonwebtoken (JWT authentication)

Setup and Usages Instruction : To set up this project, first install all required dependencies using npm install, then create a .env file and add your PORT, PostgreSQL DB_CONNECTION URL, and JWT_SECRET key. Next, create a PostgreSQL database and set up the users table for storing user information. After completing the environment configuration, run the server using npm run dev for development mode. The project uses TypeScript with Express.js, where passwords are securely hashed using bcrypt, and user login generates a JWT token for authentication. Make sure to include the token in the Authorization header when accessing any protected API route. This completes the basic setup needed to run and use the project.
