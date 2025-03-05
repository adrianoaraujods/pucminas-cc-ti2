import { Category } from "@/schemas/category";
import { Entry } from "@/schemas/entry";
import { User } from "@/schemas/user";

export const user: User = {
  id: 1,
  name: "Admin",
  email: "admin@admin.com",
  updatedAt: new Date().getTime(),
  categories: [],
  entries: [],
  recurring: [],
};

export const userEntries: Entry[] = [
  {
    id: 1,
    date: new Date().getTime(),
    title: "Entrada",
    value: 1234.67,
    updatedAt: new Date().getTime(),
    userId: 1,
    categoryId: 1,
  },
  {
    id: 2,
    date: new Date().getTime(),
    title: "Saída",
    value: -1234.67,
    updatedAt: new Date().getTime(),
    userId: 1,
    categoryId: 2,
  },
];

export const userCategories: Category[] = [
  {
    id: 1,
    title: "Entradas",
    updatedAt: new Date().getDate(),
    userId: 1,
    icon: "banknote",
  },
  {
    id: 2,
    title: "Gastos",
    updatedAt: new Date().getDate(),
    userId: 1,
    icon: "hand-coins",
  },
];
