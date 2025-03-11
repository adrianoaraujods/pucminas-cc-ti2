import { z } from "zod";

export const entrySchema = z.object({
  id: z.number(),
  title: z.string(),
  value: z.number(),
  date: z.number(),
  updatedAt: z.number(),

  // Relations
  walletId: z.number(),
  categoryId: z.number().optional(),
  recurrentId: z.number().optional(),
});

export type Entry = z.infer<typeof entrySchema>;
