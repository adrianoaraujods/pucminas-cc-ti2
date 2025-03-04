import { redirect } from "next/navigation";

export default function HomePage() {
  const userId = undefined;

  if (!userId) redirect("/login");

  return <div className=""></div>;
}
