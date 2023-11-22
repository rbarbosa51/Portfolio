import { animate, useScroll, useSpring, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Tv() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const animControl = useRef();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useScroll().scrollYProgress.on("change", (yProgress) => {
    if (!animControl.current) return;
    animControl.current.time = yProgress * animControl.current.duration;
  });
  const goBack = () => {
    navigate("/room");
  };
  useEffect(() => {
    animControl.current = animate([
      ["#text0", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text1", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text1", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text2", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text2", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      [
        "#divider1",
        { transform: "translate(0%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      [
        "#divider1",
        { transform: "translate(100%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      ["#text3", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text3", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text4", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text4", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text5", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text5", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      [
        "#divider2",
        { transform: "translate(0%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      [
        "#divider2",
        { transform: "translate(-100%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      ["#text6", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text6", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text7", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text7", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      [
        "#divider3",
        { transform: "translate(0%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      [
        "#divider3",
        { transform: "translate(100%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      ["#text8", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text8", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text9", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text9", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      [
        "#divider4",
        { transform: "translate(0%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      [
        "#divider4",
        { transform: "translate(-100%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      ["#text10", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text10", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#text11", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text11", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      [
        "#divider5",
        { transform: "translate(0%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      [
        "#divider5",
        { transform: "translate(100%, 0%)" },
        { ease: "linear", duration: 3.0 },
      ],
      ["#text12", { opacity: 1 }, { ease: "linear", duration: 2.0 }],
      ["#text12", { opacity: 0 }, { ease: "linear", duration: 2.0 }],
      ["#btnBack", { opacity: 1 }, { ease: "linear", duration: 1.0 }],
    ]);
    animControl.current.pause();
  }, []);

  return (
    <div className="tv">
      <motion.div
        className="z-100 origin0 neonShadow fixed left-0 right-0 top-0 h-1 bg-[#ebe8eb]"
        style={{ scaleX }}
      />
      <div className="fixed h-full w-full">
        <h1
          id="text0"
          className="opacity-1 neonText absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-5xl font-thin lg:text-6xl"
        >
          Scroll to the Bottom
        </h1>
        <h1
          id="text1"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Hello
        </h1>
        <h1
          id="text2"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Are you looking for a Web Developer?
        </h1>
        <div
          id="divider1"
          className="absolute top-0 h-screen w-screen -translate-x-[100%] bg-[#06083c] "
        ></div>
        <h1
          id="text3"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Are you concerned about hiring the wrong candidate?
        </h1>
        <h1
          id="text4"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          A bad hire can create a toxic environment.
        </h1>
        <div
          id="divider2"
          className="absolute top-0 h-screen w-screen translate-x-[100%] bg-[#d95659] "
        ></div>
        <h1
          id="text5"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Remember: a bad apple spoils the bunch
        </h1>
        <h1
          id="text6"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Fear Not
        </h1>
        <div
          id="divider3"
          className="absolute top-0 h-screen w-screen -translate-x-[100%] bg-[#aadbd0] "
        ></div>
        <h1
          id="text7"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Do you want a candidate who will prioritize the team over the
          individual
        </h1>
        <h1
          id="text8"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Do you want someone who will prioritize your team&apos;s Objectives and Key
          Results Indicators
        </h1>
        <div
          id="divider4"
          className="absolute top-0 h-screen w-screen translate-x-[100%] bg-[#34395f] "
        ></div>
        <h1
          id="text9"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          A team member with the drive to continue self improving for the
          benefit of your team
        </h1>
        <h1
          id="text10"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          No Drama, No Whinning...
        </h1>
        <div
          id="divider5"
          className="absolute top-0 h-screen w-screen -translate-x-[100%] bg-[#f33660] "
        ></div>
        <h1
          id="text11"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Just Pure Work Ethics
        </h1>
        <h1
          id="text12"
          className="neonText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center font-sans text-5xl font-thin opacity-0 lg:text-6xl"
        >
          Hire me!!!
        </h1>
        <button
          id="btnBack"
          className="neonText absolute bottom-4 left-1/2 -translate-x-1/2 rounded-xl border p-4 font-sans text-3xl font-thin opacity-0 lg:text-4xl"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
