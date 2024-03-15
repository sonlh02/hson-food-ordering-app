import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    // 1. kiểm tra xem người dùng có tồn tại không
    // 2. tạo người dùng nếu nó không tồn tại
    // 3. trả lại đối tượng người dùng cho client đang gọi
    try{
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};

export default {
    createCurrentUser,
};