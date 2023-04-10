import joi from "joi";

export const registerSchema = joi.object({
    name: joi.string().max(80).required(),
    description: joi.string().required(),
    stock: joi.number().integer().positive().required(),
    price: joi.number().positive().required()
})

export const updateSchema = joi.object({    
    stock: joi.number().integer().positive().required(),
})