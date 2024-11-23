import UserModel from "../model/User.js";


export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    
    const userInfo = await UserModel.findOne({ email });

    
    if (userInfo && userInfo.role === "Admin") {
      next(); 
    } else {
      return res.status(403).json({
        message: "Access Denied. Only Admins can access this.",
      });
    }
  } catch (error) {
    console.error("Error in isAdmin middleware:", error.message);
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};


export const isTeacher = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email });

   
    if (userInfo && userInfo.role === "Teacher") {
      next(); 
    } else {
      return res.status(403).json({
        message: "Access Denied. Only Teachers can access this.",
      });
    }
  } catch (error) {
    console.error("Error in isTeacher middleware:", error.message);
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
