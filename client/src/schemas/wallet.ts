import { z } from "zod";

export const walletSchema = z.object({
  id: z.number(),
  name: z.string(),
  updatedAt: z.number(),

  // Relations
  userId: z.number(),
  entries: z.array(z.number()),
  recurring: z.array(z.number()),
});

export type Wallet = z.infer<typeof walletSchema>;
