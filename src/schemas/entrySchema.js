import joi from 'joi'

const entrySchema = joi.object({
    type: joi.valid('in', 'out').required(),
    time: joi.required(),
    value: joi.string().required(),
    description: joi.string().required()
})

export default entrySchema;