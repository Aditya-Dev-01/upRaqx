import Joi from 'joi';

export function validateMovie(movie: { title: string, year: number, poster: string }) {
    const schema = Joi.object({
        title: Joi.string().required(),
        year: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
    });
    
    return schema.validate(movie);
}
export function validateUpdateMovie(movie: { title?: string, year?: number, poster?: string }) {
    const schema = Joi.object({
        title: Joi.string().optional(),
        year: Joi.number().integer().min(1800).max(new Date().getFullYear()).optional(),
        poster: Joi.string().optional(),
    });
    
    return schema.validate(movie);
}
