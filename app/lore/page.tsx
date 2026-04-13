import Lore from "@/components/lore/Lore";
import LoreType from "@/types/lore/loreType";

export const metadata = {
  title: "Lore",
  description:
    "The many lores of Point Blank <. >",
};

export default async function LorePage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/lore`, {
    cache: "no-store",
  });
  const res: LoreType[] = await req.json();

  const lores = res
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <section className="bg-pbpages w-full h-full">
      <Lore lores={lores} />
    </section>
  );
}
