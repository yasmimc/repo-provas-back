import joi from "joi";

const examSchema = joi.object({
    name: joi.string().required(),
    teacher: joi.number().min(1).required(),
    subject: joi.number().min(1).required(),
    category: joi.number().min(1).required(),
    link: joi.string().uri().required(),
});

export default examSchema;
