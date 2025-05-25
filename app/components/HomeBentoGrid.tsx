import TiltedCard from "./TiltedCard";
import BlurText from "./TextEffects/BlurText";

export default function HomeBentoGrid() {
  return (
    <div>
      <div className="mx-auto max-w-2xl p-6 lg:max-w-7xl lg:p-10">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:col-start-1 lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 mb-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Who I am
                </p>
                <div className="mt-2">
                  <span className="max-w-lg mx-auto text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    <BlurText
                      text="Euichan Kim (Daniel)"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-2xl"
                    />
                  </span>
                  <span className="text-base/7 font-semibold text-indigo-600">
                    <BlurText
                      text="Mathematics at UofT"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl tracking-tight"
                    />
                  </span>
                </div>

                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  I'm a Mathematics (Probability & Statistics) student at the
                  University of Toronto with a strong interest in data science
                  and ML.
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  This site is where I share my projects, ideas, and ongoing
                  explorations—it&apos;s also a sandbox where I experiment with
                  whatever I&apos;m currently into.
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center italic">
                  Note: This site is currently under development (major
                  framework, backend, and UI update/migration).{" "}
                  <a
                    href="https://github.com/danielkim-im/portfolio-danielkim.im"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline italic"
                  >
                    View it on GitHub.
                  </a>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
          </div>

          <div className="relative lg:col-start-2 lg:col-span-2 lg:row-start-1">
            <div className="absolute inset-px bg-white rounded-tl-[calc(var(--radius-lg))] rounded-bl-[calc(var(--radius-lg))] rounded-br-[calc(var(--radius-lg))] lg:rounded-tr-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-tl-[calc(var(--radius-lg)+1px)] rounded-bl-[calc(var(--radius-lg)+1px)] rounded-br-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Latest Project
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  TTC Transit Delay Prediction Model
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  SDSS Datathon 2025{" "}
                  <a
                    href="/projects/ttcdelayprediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (View Project)
                  </a>
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm flex items-center justify-center p-[10%]">
                <TiltedCard
                  mediaSrc="https://r2.danielkim.im/projects/ttcdelayprediction/vid1_720p.mov"
                  altText=""
                  captionText="guess the sta w/ most delays"
                  containerWidth="100%"
                  containerHeight="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  overlayContent={<p></p>}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px shadow-sm ring-1 ring-black/5 rounded-tl-[calc(var(--radius-lg))] rounded-bl-[calc(var(--radius-lg))] rounded-br-[calc(var(--radius-lg))] lg:rounded-tr-[2rem]"></div>
          </div>

          <div className="relative lg:col-start-1 lg:col-span-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Project / Reinforcement Learning Agent
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  UTMIST AI² Tournament{" "}
                  <a
                    href="/projects/rlagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (View Project)
                  </a>
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm flex items-center justify-center p-[10%]">
                <TiltedCard
                  mediaSrc="https://r2.danielkim.im/projects/rlagent/ai%5E2model2.mp4"
                  altText=""
                  captionText="jump!"
                  containerWidth="100%"
                  containerHeight="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  overlayContent={<p className="tilted-card-demo-text"></p>}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]"></div>
          </div>

          <div className="relative lg:col-start-3 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  News
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Regularly Updated
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        LifeLog.txt
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14" style={{ color: "white" }}>
                    <div>
                      <p>
                        <b>Mar 2025</b>
                      </p>
                      <p>SDSS Datathon 2025</p>
                    </div>
                    <p>*</p>
                    <div>
                      <p>
                        <b>Feb 2025</b>
                      </p>
                      <p>UTMIST AI^2 Tournament</p>
                    </div>
                    <p>*</p>
                    <div>
                      <p>
                        <b>Jun 2024 - Apr 2025</b>
                      </p>
                      <p>📚 Uni Year 1</p>
                    </div>
                    <p>*</p>
                    <p>*</p>
                    <div>
                      <p>
                        <b>Apr 2024 - Jul 2024</b>
                      </p>
                      <p>English Teacher at Read101</p>
                    </div>
                    <p>*</p>
                    <p>*</p>
                    <div>
                      <p>
                        <b>Jul 2020 - Jan 2023 · 2 yrs 7 mos</b>
                      </p>
                      <p>Android Engineer at Yola Studio (self-employed)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
