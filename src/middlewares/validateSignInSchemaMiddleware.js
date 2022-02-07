import signInSchema from "../schemas/signInSchema.js";

export default function validateSignInSchemaMiddleware(req, res, next) {
    const validation = signInSchema.validate(req.body)

    if(validation.error) {
        console.log(validation.error)
        return res.sendStatus(422)
        
    }
    next();
}