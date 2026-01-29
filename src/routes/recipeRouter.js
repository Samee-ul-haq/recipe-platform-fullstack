import express from 'express'
import { uploadRecipe,
    getRecipeById
 } from '../controllers/recipecontroller.js'
import { verifyToken } from '../middleware/authmiddleware.js'

const router=express.Router()

router.post('/upload',verifyToken,uploadRecipe)
router.get('/:id',getRecipeById)

export default router