import express from 'express'
import pool from './src/config/db.js'
import 'dotenv/config'
import userRouter from './src/routes/userRouter.js'
import recipeRouter from './src/routes/recipeRouter.js'

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Bookstore API is running! 📚")
})
app.use('/api',userRouter)
app.use('/recipe',recipeRouter)

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})