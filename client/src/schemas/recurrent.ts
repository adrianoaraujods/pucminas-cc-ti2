import { z } from "zod";

export const recurringSchema = z.object({
  id: z.number(),
  title: z.string(),
  value: z.number(),
  period: z.number(),
  timeType: z.enum(["day", "week", "month", "year"]),
  startDate: z.number(),
  endDate: z.number(),
  updatedAt: z.number(),

  // Relations
  userId: z.number(),
  categoryId: z.number().optional(),
});

export type User = z.infer<typeof recurringSchema>;
