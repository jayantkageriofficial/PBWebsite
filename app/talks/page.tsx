import Talks from "@/components/talks/Talks";
import { type Talk } from "@/lib/db/models/talks";
import { serializeId } from "@/lib/utils";

export const metadata = {
  title: "Talks",
};

export default async function TalksPage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/talks`);
  const res = await req.json();

  const talks = res.talks.map((talk: Talk & { _id: { toString(): string } }) =>
    serializeId(talk),
  );

  return (
    <section className="bg-pbpages w-full h-full" id="talks">
      <Talks talks={talks} />
    </section>
  );
}
