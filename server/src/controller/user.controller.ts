import type { Request, Response } from "express";
import pool from "../db/db.js";
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
 try {
    const results = await pool.query("SELECT * FROM users");

    console.log("results of all users in database are here:", results.rows);

    res.status(200).json({
      message: "Users list is here",
      results: results.rows,
    });

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
