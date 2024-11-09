"use client";

import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "./Button";

function MovingBorderCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative col-span-1 xl:row-span-3 overflow-hidden rounded-xl bg-black/90 ${className}`}
    >
      {/* Moving border line */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute h-[200%] w-[200%] animate-rotate-forever">
          <div className="absolute top-0 left-0 h-1/2 w-1/2 border-t-4 border-white/25 rounded-tl-[200%]" />
          <div className="absolute top-0 right-0 h-1/2 w-1/2 border-r-4 border-white/25 rounded-tr-[200%]" />
          <div className="absolute bottom-0 right-0 h-1/2 w-1/2 border-b-4 border-white/25 rounded-br-[200%]" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1/2 border-l-4 border-white/25 rounded-bl-[200%]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative rounded-xl bg-black/90 p-6 m-[2px]">
        {children}
      </div>
    </div>
  );
}

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" memosy7531@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <MovingBorderCard>
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">I'm Mahmud Almubayed 👋</p>
              <p className="grid-subtext">
                a 14-year-old from Syria. I'm a full-stack developer who has
                completed several courses in JavaScript, React, and Next.js.
              </p>
            </div>
          </div>
        </MovingBorderCard>

        <MovingBorderCard>
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </MovingBorderCard>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: 29,
                    text: "Bursa, Turkey",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Bursa, Turkey and open to remote work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am dedicated to staying at the forefront of the latest
                technologies and trends in web development, enabling me to
                provide innovative and cutting-edge solutions. My goal is to
                transform ideas into reality by creating unique and effective
                websites that fulfill aspirations and exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  memosy7531@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
