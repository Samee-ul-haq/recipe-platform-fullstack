import express from 'express'
import pool from './src/config/db.js'
import 'dotenv/config'
import userRouter from './src/routes/userRouter.js'
import recipeRouter from './src/routes/recipeRouter.js'
import cors from 'cors'

const app=express()
//Allowing react to talk to backend
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("recipe API is running! 📚")
})
app.use('/api',userRouter)
app.use('/api/recipes',recipeRouter)
app.use('/uploads', express.static('uploads'));

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})