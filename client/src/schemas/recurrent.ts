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
  walletId: z.number(),
  entries: z.array(z.number()),
  categoryId: z.number().optional(),
});

export type Recurrent = z.infer<typeof recurringSchema>;
