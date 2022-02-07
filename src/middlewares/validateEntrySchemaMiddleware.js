import entrySchema from '../schemas/entrySchema.js'

export default function validateEntrySchema(req, res, next) {
    const validation = entrySchema.validate(req.body)

    if(validation.error) {
        console.log(validation.error)
        return res.sendStatus(422)
        
    }
    next();
}