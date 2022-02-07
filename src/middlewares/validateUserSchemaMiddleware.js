import userSchema from "../schemas/userSchema.js";

export default function validateUserSchemaMiddleware(req, res, next) {
    const validation = userSchema.validate(req.body)

    if(validation.error) {
        console.log(validation.error)
        return res.sendStatus(422)
        
    }
    next()
}