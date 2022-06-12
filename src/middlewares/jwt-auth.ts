import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized user" });

  jwt.verify(token!, String(process.env.JWT_TOKEN), (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.body.user = user;
    next();
  });
}
