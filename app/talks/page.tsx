import Talks from "@/components/talks/Talks";
import { type Talk } from "@/lib/db/models/talks";
import { serializeId } from "@/lib/utils";

export const metadata = {
  title: "Talks",
  description: "Talks and conferences by Point Blank members",
};

export default async function TalksPage() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/talks`);
  const res = await req.json();

  const talks = res.talks.map((talk: Talk & { _id: { toString(): string } }) =>
    serializeId(talk),
  );

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-pbblack rounded-xl text-white py-10 md:py-16 text-lexend-300 min-h-xl ">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
        {/* Heading */}
        <div className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 px-4 md:px-10 flex flex-wrap justify-center gap-2">
          {phrases.map((phrase, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: idx * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {phrase}
              {idx < phrases.length - 1 ? "." : ""}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-gray-400 md:text-2xl lg:text-3xl text-lexend-300 font-light mb-8"
        >
          A showcase of talks and conferences by the talented members of
          <br />
          Point Blank.
        </motion.p>

        <div
          className={`transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 py-6 md:py-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-7 py-2 md:py-4 rounded-full text-sm md:text-xl uppercase cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-pbgreen text-black"
                    : "bg-white/5 text-white/60"
                }`}
              >
                {tab === "all" ? "All" : tab}
              </button>
            ))}
          </div>

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-pbgray rounded-xl max-w-330 mx-auto flex justify-center mb-6 px-2 md:px-6 lg:px-8"
            >
              <div className="flex flex-col lg:flex-row items-center py-4">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-full lg:w-150 aspect-[3/2] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={240}
                      height={160}
                      className="object-contain rounded-xl w-full h-full"
                    />
                  </div>
                  <span className="text-pbgreen text-light font-lexend-300 mt-3 bg-black/40 rounded-full px-3 p-3">
                    {item.author}
                  </span>
                </div>

                <div className="flex flex-col items-start w-full px-4 md:px-8 lg:px-12 py-6 lg:py-8">
                  <div className="mb-4">
                    <h2 className="text-pbgreen font-medium text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 max-w-150 text-left break-words">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl lg:text-xl leading-snug max-w-110 md:leading-normal">
                      {expanded === item.id
                        ? item.description
                        : item.description.slice(0, 120) + "..."}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between py-2 md:py-5 md:px-4">
                    <div className="flex gap-3">
                      <span className="bg-[#191919] py-2 px-2 md:px-4 md:py-4 text-sm md:text-lg text-light rounded-2xl  self-start">
                        {item.venue}
                      </span>
                    </div>
                    <span className="bg-[#191919] py-2 px-2 md:px-4 md:py-4 text-sm md:text-lg text-light rounded-2xl self-start">
                      {item.date}
                    </span>
                    <button
                      onClick={() =>
                        setExpanded(expanded === item.id ? null : item.id)
                      }
                      className="bg-[#191919] py-2 px-2 md:px-4 md:py-4 text-sm md:text-lg text-light rounded-2xl curser-pointer self-start"
                    >
                      {expanded === item.id ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
