import express from "express";
import router from "./routes/user.routes.js";
const app = express();
app.use(express.json());
app.use("/api/v1/users",router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
