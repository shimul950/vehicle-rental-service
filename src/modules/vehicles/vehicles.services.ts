import { pool } from "../../config/db";
const addNewVehicles = async(payload: Record<string, unknown> ) => {
  const {vehicle_name, registration_number, daily_rent_price} = payload;
  const result = await pool.query(`
        INSERT INTO vehicles(vehicle_name, registration_number, daily_rent_price) VALUES($1, $2, $3) RETURNING * `, [vehicle_name, registration_number, daily_rent_price]);
  return result;
};

const getAllVehicles = async () => {
  const result = await pool.query(`
      SELECT * FROM vehicles 
      `);

  return result;
}

const getVehiclesById = async (id: string) => {
  const result = await pool.query(`
      SELECT * FROM vehicles WHERE id =$1`, [id]);
  return result;
}

const updateVehicle = async (vehicle_name: string, registration_number:string, daily_rent_price:number,availability_status:string) => {
  const result = await pool.query(`UPDATE vehicles SET vehicle_name = $1 registration_number = $2 daily_rent_price =$3 availability_status =$4 WHERE id=$3 RETURNING *`, [vehicle_name, registration_number, daily_rent_price,availability_status]);
  return result;
}

const deletVehicles = async (id: string) => {
  const result = await pool.query(`
      DELETE FROM vehicles WHERE id =$1`, [id]);
  return result;
}

export const vehiclesServices ={
    addNewVehicles,
    getAllVehicles,
    getVehiclesById,
    updateVehicle,
    deletVehicles
}