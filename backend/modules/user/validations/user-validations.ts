import Joi from 'joi';

export function validationForSign_In(userLogin: { email?: string, password: string }) {
    const validate = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });

    const result = validate.validate(userLogin);

    return result;
}
