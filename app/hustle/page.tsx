import Hustle from "@/components/hustle/Hustle";
import { type Latest, type Leaderboard } from "@/lib/db/models/hustle";

export const metadata = {
  title: "PB Hustle",
};

export default async function HustlePage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/hustle`);
  const res = await req.json();

  const latest: Latest | null = res.data?.latest ?? null;
  const leaderboard: Leaderboard | null = res.data?.leaderboard ?? null;

  return (
    <section className="w-full h-full" id="hustle">
      <Hustle latest={latest} leaderboard={leaderboard} />
    </section>
  );
}
