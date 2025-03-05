import { z } from "zod";

export const categorySchema = z.object({
  id: z.number(),
  title: z.string(),
  icon: z.string().optional(),
  updatedAt: z.number(),

  // Relations
  userId: z.number(),
});

export type Category = z.infer<typeof categorySchema>;
