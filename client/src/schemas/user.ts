import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  updatedAt: z.number(),

  // Relations
  wallets: z.array(z.number()),
  categories: z.array(z.number()),
});

export type User = z.infer<typeof userSchema>;
