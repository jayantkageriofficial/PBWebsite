import Achievements from "@/components/achievements/Achievements";
import { serializeId } from "@/lib/utils";

export const metadata = {
  title: "Achievements",
  description: "Achievements page",
};

export default async function AchievementsPage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/achievements`);
  const res = await req.json();

  const docs = (res.achievements ?? []).map(
    (doc: { _id: { toString(): string }; [key: string]: unknown }) =>
      serializeId(doc),
  );

  return <Achievements initialDocs={docs} />;
}
