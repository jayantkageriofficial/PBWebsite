import Lore from "@/components/lore/Lore";
import LoreType from "@/types/lore/loreType";
import { serializeId } from "@/lib/utils";

export const metadata = {
  title: "Lore",
};

export default async function LorePage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/lore`, {
    cache: "no-store",
  });
  const res: LoreType[] = await req.json();

  const lores = res
    .map((lore) => serializeId(lore) as unknown as LoreType)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="w-full h-full">
      <Lore lores={lores} />
    </section>
  );
}
