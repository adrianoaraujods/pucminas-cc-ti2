import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  updatedAt: z.number(),

  // Relations
  categories: z.array(z.number()),
  entries: z.array(z.number()),
  recurring: z.array(z.number()),
});

export type User = z.infer<typeof userSchema>;
