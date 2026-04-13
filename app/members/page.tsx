import Members from "@/components/members/Members";
import { type Members as MemberType } from "@/lib/db/models/members";
import { serializeId } from "@/lib/utils";

export const metadata = {
  title: "Members",
  description: "Members page",
};
export default async function Events() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/members`);
  const res = await req.json();

  const members = res.members.map((member: MemberType) => serializeId(member));

  return (
    <section className="bg-pbpages w-full h-full" id="members">
      <Members members={members} />
    </section>
  );
}
