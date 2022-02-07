import joi from 'joi'

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().required()
})

export default signUpSchema;