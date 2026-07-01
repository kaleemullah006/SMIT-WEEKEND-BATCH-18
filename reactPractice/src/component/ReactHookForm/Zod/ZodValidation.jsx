import z from "zod";

const schema = z.object({
    firstName: z.string().min(3, "firsnaam zaroori hai"),
    email: z.string().email("email zaroori hai"),
    password: z.string().min(8,"password zaroori hai")

})

export default schema
