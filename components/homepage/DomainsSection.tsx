import FadeIn from "@/components/FadeIn";
import {
  DevOps,
  Flutter,
  ICPC,
  IOT,
  Kaggle,
  ML,
  OpenSource,
  ReactIcon,
} from "@/components/Icons";

const domains = [
  { name: "DevOps", Icon: DevOps },
  { name: "IOT-ML", Icon: IOT },
  { name: "Kaggle", Icon: Kaggle },
  { name: "ML-Research", Icon: ML },
  { name: "Open Source Hackathon", Icon: OpenSource },
  { name: "React Development", Icon: ReactIcon },
  { name: "ACM - ICPC", Icon: ICPC },
  { name: "Flutter Development", Icon: Flutter },
];

export default function DomainsSection() {
  return (
    <section
      id="domains"
      className="bg-pbpages text-white py-20 px-4 sm:px-10 lg:px-20"
    >
      <FadeIn className="text-center mb-12">
        <h2 className="text-4xl font-bold text-pbgreen mb-3">
          Domains we Love
        </h2>
        <p className="text-white/70 text-sm">
          we will write some sub heading here
        </p>
      </FadeIn>

      <div className="relative max-w-8xl mx-auto rounded-3xl overflow-hidden">
        <div
          className="absolute translate-y-[50%] translate-x-[50%] right-0 bottom-0 w-170 h-200 z-0 pointer-events-none
          bg-[radial-gradient(circle,rgba(55,255,0,0.6)_1px,transparent_2px)]
          bg-size-[11px_11px]
          mask-[radial-gradient(circle,transparent_15%,black_30%,transparent_50%)]
          [-webkit-mask-image:radial-gradient(circle,transparent_15%,black_30%,transparent_50%)]"
        />
        <div
          className="absolute translate-y-[-50%] translate-x-[-50%] left-0 top-0 w-170 h-200 z-0 pointer-events-none
          bg-[radial-gradient(circle,rgba(55,255,0,0.6)_1px,transparent_2px)]
          bg-size-[11px_11px]
          mask-[radial-gradient(circle,transparent_15%,black_30%,transparent_50%)]
          [-webkit-mask-image:radial-gradient(circle,transparent_15%,black_30%,transparent_50%)]"
        />

        <div className="bg-pbdarkgray p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {domains.map(({ name, Icon }, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.1} className="flex">
                <div className="flex flex-col items-center justify-center py-8 px-6 gap-3 z-10 w-full bg-pbcard border-white/16 border rounded-2xl transition-all duration-300 hover:border-pbgreen/50 hover:shadow-[0_0_20px_rgba(55,255,0,0.15)]">
                  <div className="w-17.5 h-17.5 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(55,255,0,0.05)_0%,rgba(55,255,0,0)_100%)]">
                    <div className="w-13.5 h-13.5 rounded-full p-3 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]">
                      <Icon
                        className="w-7.5 h-7.5 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-white text-center leading-tight">
                    {name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
