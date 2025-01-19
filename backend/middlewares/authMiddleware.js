const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path to your User model

// Middleware to verify JWT and check user role
const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token provided, authorization denied." });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Optional: Check the role of the user if roles are provided
      if (roles.length && !roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({
            message: "You do not have permission to access this resource.",
          });
      }

      // Check if user exists in the database (optional)
      const user = await User.findById(req.user.id);
      if (!user) {
        return res
          .status(401)
          .json({ message: "User not found, authorization denied." });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Token is not valid." });
    }
  };
};

module.exports = authMiddleware;
