import {z} from 'zod';
export const registrationSchema = z.object({
    name: z.string({required_error: 'This field is required'}),
    email: z.string({required_error: 'This field is required'}).email(),
    password: z.string({required_error: 'This field is requried'})
})
export const loginShcema = z.object({
    email: z.string({required_error: 'This field is required'}).email(),
    password: z.string({required_error: "This field is required"})
})