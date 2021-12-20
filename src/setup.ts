import dotenv from "dotenv";
const path = process.env.NODE_ENV.trim() === "test" ? ".env.test" : ".env";

dotenv.config({ path });
