import { Pool } from "pg";
import config from ".";

//>>> DB
export const pool = new Pool({
  connectionString: `${config.connection_str}`,
});

//users DB

const initDB = async()=>{
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        CONSTRAINT email_lowercase CHECK (email = LOWER(email)),
        password TEXT NOT NULL,
        CONSTRAINT password_min_length CHECK (LENGTH(password) >= 6),
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user'
        )
        `);

//vehicle
    await pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(100) NOT NULL,
        type VARCHAR(50),
        registration_number VARCHAR(20) UNIQUE NOT NULL,
        daily_rent_price VARCHAR(10) NOT NULL,
        availability_status VARCHAR(15)
        )
        `);

//bookings

    await pool.query(`
        CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES users(id) ON DELETE CASCADE,
        vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE,
        rent_start_date VARCHAR(10) NOT NULL,
        rent_end_date VARCHAR(10) NOT NULL,
        total_price NUMERIC(50) NOT NULL CHECK(total_price > 0),
        status VARCHAR(15)
        )   
        `)
}

export default initDB;