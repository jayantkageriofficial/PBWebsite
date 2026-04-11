import Members from "@/components/Members"

export const metadata = {
    title: 'Members',
    description: 'Members page',
}
export default function Events() {
    return (
        <main className="bg-[#111111] w-full h-full">
        <Members />
        </main>
    )
}