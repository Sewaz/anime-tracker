import express from 'express';
import dotenv from 'dotenv';
import healthRoutes from "./routes/health.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/health', healthRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})