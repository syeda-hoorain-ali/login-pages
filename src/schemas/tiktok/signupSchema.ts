import { z } from "zod"

export const formSchema = z.object({
  month: z.string().min(2).max(50),
  day: z.string().min(2).max(50),
  year: z.string().min(2).max(50),
  username4: z.string().min(2).max(50),
  username1: z.string().min(2).max(50),
})
