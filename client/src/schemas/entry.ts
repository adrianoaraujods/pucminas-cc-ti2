import { z } from "zod";

export const entrySchema = z.object({
  id: z.number(),
  title: z.string(),
  value: z.number(),
  date: z.number(),
  updatedAt: z.number(),

  // Relations
  userId: z.number(),
  categoryId: z.number().optional(),
  recurrentId: z.number().optional(),
});

export type Category = z.infer<typeof entrySchema>;
