import db from '../config/db.js'
import bycrypt from 'bcryptjs'

export const registerUser=async(req,res)=>{
    try {
        const {email,password}=req.body

        // check if user exists
        const sql="SELECT email FROM users WHERE email=?"
        const [rows]=await db.query(sql,[email])

        if(rows.length)
           return res.status(409).json({message:"User already exists"})

        const sql2="INSERT INTO users (email,password) VALUES (?,?)"

        //hash password..
        const hashedPassword=await bycrypt.hash(password,10)

        const [result]=await db.query(sql2,[email,hashedPassword])
        
        res.json({
            message:"User Created successfully",
            id:result.insertId  // ID just created
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}