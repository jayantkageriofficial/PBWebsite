import Members from "@/components/Members";

export const metadata = {
  title: "Members",
  description: "Members page",
};
export default function Events() {

  return (
    <section className="bg-pbpages w-full h-full" id="members">
      <Members />
    </section>
  );
}

