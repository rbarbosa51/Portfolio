import "winbox/dist/css/winbox.min.css";
import WinBox from "react-winbox";
import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { host } from "../components/Host";



const Window = ({ id, title, width, height, url, children }) => {
  return (
    <WinBox
      title={title}
      id={id}
      width={width}
      height={height}
      url={url}
      x={"center"}
      y={"center"}
    >
      {children}
    </WinBox>
  );
};
const Thanks = () => (
  <div className="px-6">
    <h1 className="text-center text-xl font-bold text-blue-600">Thank You</h1>
    <p className="text-justify first-letter:ml-2">
      Thank you for visiting my site. I sincerely appreciate your visit, and
      from the bottom of my heart, I hope that you found it:
    </p>
    <ul className="mt-2 list-disc font-bold">
      <li className="ml-4">Entertaining</li>
      <li className="ml-4">Captivating</li>
      <li className="ml-4">Humorous</li>
      <li className="ml-4">Informative</li>
    </ul>
    <p className="mt-2 text-justify first-letter:ml-2">
      Please feel free to contact me, so we may work on future projects. I look
      forward to working for you.
    </p>
    <p className="mr-4 text-right font-cursive text-2xl font-bold text-blue-600">
      Rafael
    </p>
  </div>
);
const AboutMe = () => (
  <div className="px-6">
    <h1 className="text-center text-xl font-bold text-blue-600 ">About Me</h1>
    <p className="mt-2 text-justify first-letter:ml-2">
      Motivated, results-oriented, and dynamic professional with years of
      comprehensive experience in software development and engineering in
      innovative and constantly evolving environments. Skilled communicator,
      team player, and hands-on leader about to build relationships with teams,
      peers, and clients. Analytical and organized with fearless approach to
      problem solving and an aptitude for identifying opportunities to improve.
    </p>
  </div>
);
const HumanLanguages = () => (
  <div className="flex flex-col items-center justify-center px-6">
    <h1 className="text-center text-xl font-bold text-blue-600">Languages</h1>
    <p className="mt-2 text-justify first-letter:ml-2">
      I can speak/read/write in the following Languages:
    </p>
    <table className="mt-4 table-fixed border border-black/20 font-medium">
      <thead className="border-b-2 border-black/20 bg-gray-100">
        <tr>
          <th className="px-4">Language</th>
          <th className="px-4">Proficiency</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td className="px-4">English</td>
          <td className="px-4">Professional working proficiency</td>
        </tr>
        <tr>
          <td className="bg-gray-100 px-4">Spanish</td>
          <td className="bg-gray-100 px-4">Professional working proficiency</td>
        </tr>
        <tr>
          <td className="px-4">German</td>
          <td className="px-4">Beginner - Very Low Proficiency</td>
        </tr>
      </tbody>
    </table>
  </div>
);
const Terminal = () => (
  <div className="mockup-code">
    <pre data-prefix="$">
      <code>npm run needBadAssProgrammer</code>
    </pre>
    <pre data-prefix=">" className="text-warning">
      <code>executing...</code>
    </pre>
    <pre data-prefix=">" className="neonText text-success">
      <code>Hire Rafael!</code>
    </pre>
  </div>
);
const Skills = () => (
  <div className="px-6">
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-2 text-center text-xl font-bold text-blue-600">
        Skills
      </h1>
      <p className="text-justify first-letter:ml-2">
        This is a non-exclusive list of my skills. Ask me for more info.
      </p>
    </div>
    <div className="mx-auto mt-4 flex w-[90%] flex-wrap gap-4">
      <div className="font-bold ">
        HTML5{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        />
      </div>
      <div className="font-bold">
        CSS3{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        />
      </div>
      <div className="font-bold">
        JavaScript{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
      </div>
      <div className="font-bold">
        TypeScript{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        />
      </div>
      <div className="font-bold">
        Node.JS{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
      </div>
      <div className="font-bold">
        Express{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        />
      </div>
      <div className="font-bold">
        React{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
      </div>
      <div className="font-bold">
        C/C++{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg"
        />
      </div>
      <div className="font-bold">
        Python{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
        />
      </div>
      <div className="font-bold">
        MySQL{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
      </div>
      <div className="font-bold">
        MongoDB{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        />
      </div>
      <div className="font-bold">
        Java{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        />
      </div>
      <div className="font-bold">
        Blender{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
        />
      </div>
      <div className="font-bold">
        Three.JS{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
        />
      </div>
      <div className="font-bold">
        Next.JS{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />
      </div>
      <div className="font-bold">
        TailwindCSS{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />
      </div>
      <div className="font-bold">
        GraphQL{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
        />
      </div>
      <div className="font-bold">
        Bootstrap{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />
      </div>
      <div className="font-bold">
        BulmaCSS{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
        />
      </div>
      <div className="font-bold">
        Firebase{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        />
      </div>
      <div className="font-bold">
        Redux Toolkit{" "}
        <img
          className="inline"
          width="24"
          height="24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        />
      </div>
    </div>
    <p className="mt-4 text-center">
      I am also a fast learner and will learn any new skills to meet your
      team&apos;s visions and goals.
    </p>
  </div>
);
const Trash = () => (
  <div className="relative left-2 top-4 flex flex-wrap gap-8">
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-slate-300"
      >
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>
      <div>deletedFile.txt</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-green-500"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
          clipRule="evenodd"
        />
      </svg>
      <div>spicyPicture.png</div>
    </div>
    <div
      className="flex flex-col items-center justify-center"
      onClick={() =>
        window.open("https://www.youtube.com/watch?v=j9V78UbdzWI", "_blank")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path
          fillRule="evenodd"
          d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
          clipRule="evenodd"
        />
      </svg>
      <div>DoNotClick.html</div>
    </div>
    
  </div>
);
const Share = () => (
  <div className="relative left-2 top-4 flex flex-wrap gap-8">
    <div
      className="flex flex-col items-center justify-center"
      onClick={() =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${host}`,
          "_blank",
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
      >
        <path
          fill="#039be5"
          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
        ></path>
        <path
          fill="#fff"
          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
        ></path>
      </svg>
      <div>Facebook</div>
    </div>
    <div
      className="flex flex-col items-center justify-center"
      onClick={() =>
        window.open(`https://twitter.com/intent/tweet?url=${host}`, "_blank")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
      >
        <path
          fill="#212121"
          fillRule="evenodd"
          d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
        ></path>
        <polygon
          fill="#fff"
          points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
        ></polygon>
        <polygon
          fill="#fff"
          points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
        ></polygon>
      </svg>
      <div>Twitter/X</div>
    </div>
    <div
      className="flex flex-col items-center justify-center"
      onClick={() =>
        window.open(
          `https://www.addtoany.com/add_to/whatsapp?linkurl=${host}`,
          "_blank",
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
      >
        <path
          fill="#fff"
          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
        ></path>
        <path
          fill="#fff"
          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
        ></path>
        <path
          fill="#40c351"
          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div>WhatsApp</div>
    </div>

    <div
      className="flex flex-col items-center justify-center"
      onClick={() =>
        window.open(
          `mailto:?&subject=Developer%20Profile&cc=&bcc=&body=${host}`,
          "_blank",
        )
      }
    >
      <svg
        className="h-12 w-12 fill-slate-500/80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
      </svg>
      <div>Email</div>
    </div>
  </div>
);
const PasswordWindow = () => (
  <div className="px-2">
    {/* <h1 className="text-center text-xl font-bold text-blue-600 ">Password</h1> */}
    <p className="mt-2 text-justify first-letter:ml-2">
     password123
    </p>
  </div>
);
export default function Desktop() {
  const [windows, setWindows] = useState([]);
  const [windowCount, setWindowCount] = useState(0);
  const navigate = useNavigate();
  
  const openWinBox = (title, width, height, url, children) => {
    setWindows([
      <Window
        key={windowCount + 1}
        title={title}
        width={width}
        height={height}
        url={url}
      >{children}</Window>,
      ...windows,
    ]);
    setWindowCount((prev) => ++prev);
  };
  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-100 to-blue-400">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-5xl font-thin text-transparent md:text-7xl">
          Rafael&apos;s Desktop
        </h1>
      </div>
      {/* Bar */}
      <div className="absolute top-0 flex h-8 w-full items-center justify-between border-1 border-black/10 bg-slate-200/50 p-8">
        <div className="flex gap-2">
          <Dropdown className="bg-slate-200/50">
            <DropdownTrigger>
              <Button
                variant=""
                className="text-md bg-gradient-to-r from-blue-700  to-red-500 bg-clip-text text-transparent hover:bg-slate-100 md:text-xl"
              >
                File
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="">
              <DropdownItem
                key="thanks"
                onClick={() => openWinBox("Thanks", 500, 350, null, <Thanks />)}
                className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              >
                Thanks
              </DropdownItem>
              <DropdownItem
                key="exit"
                onClick={() => navigate("/room")}
                className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-slate-200/50">
            <DropdownTrigger>
              <Button
                variant=""
                className="text-md bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent hover:bg-slate-100 md:text-xl"
              >
                Info
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                key="about"
                onClick={() =>
                  openWinBox("About Me", 500, 350, null, <AboutMe />)
                }
                className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              >
                About Me
              </DropdownItem>
              <DropdownItem
                key="languages"
                onClick={() =>
                  openWinBox(
                    "Human Languages",
                    500,
                    300,
                    null,
                    <HumanLanguages />,
                  )
                }
                className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              >
                Human Languages
              </DropdownItem>
              <DropdownItem
                key="skills"
                onClick={() => openWinBox("Skills", 700, 400, null, <Skills />)}
                className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              >
                Skills
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="text-md bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent hover:bg-slate-100 md:text-xl">
          {new Date().toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>
      {/* Icons */}
      {/* Wikipedia */}
      <div
        className="absolute left-[35%] top-[20%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() =>
          openWinBox("Wikipedia", 500, 300, "https://www.wikipedia.com", null)
        }
      >
        <svg
          className="h-12 w-12 fill-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
            clipRule="evenodd"
          />
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Wikipedia
        </div>
      </div>

      {/* Resume */}
      <div
        className="absolute left-[3%] top-[55%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1TpmA0hnA6PjHiS66V1CX972sd64GfHQq/view?usp=sharing",
            "_blank",
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="h-12 w-12"
        >
          <path
            fill="#fff"
            d="M6.5 37.5L6.5 2.5 24.793 2.5 33.5 11.207 33.5 37.5z"
          ></path>
          <path
            fill="#788b9c"
            d="M24.586,3L33,11.414V37H7V3H24.586 M25,2H6v36h28V11L25,2L25,2z"
          ></path>
          <path
            fill="#fff"
            d="M24.5 11.5L24.5 2.5 24.793 2.5 33.5 11.207 33.5 11.5z"
          ></path>
          <path
            fill="#788b9c"
            d="M25 3.414L32.586 11H25V3.414M25 2h-1v10h10v-1L25 2 25 2zM12 16H28V17H12zM12 19H24V20H12zM12 22H28V23H12zM12 25H24V26H12zM12 28H28V29H12z"
          ></path>
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Resume
        </div>
      </div>
      {/* Password */}
      <div
        className="absolute right-[6.5%] bottom-[35%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() => openWinBox("Password", 500, 350, null, <PasswordWindow />)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="h-12 w-12"
        >
          <path
            fill="#fff"
            d="M6.5 37.5L6.5 2.5 24.793 2.5 33.5 11.207 33.5 37.5z"
          ></path>
          <path
            fill="#788b9c"
            d="M24.586,3L33,11.414V37H7V3H24.586 M25,2H6v36h28V11L25,2L25,2z"
          ></path>
          <path
            fill="#fff"
            d="M24.5 11.5L24.5 2.5 24.793 2.5 33.5 11.207 33.5 11.5z"
          ></path>
          <path
            fill="#788b9c"
            d="M25 3.414L32.586 11H25V3.414M25 2h-1v10h10v-1L25 2 25 2zM12 16H28V17H12zM12 19H24V20H12zM12 22H28V23H12zM12 25H24V26H12zM12 28H28V29H12z"
          ></path>
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Password
        </div>
      </div>
      {/* Email */}
      <div
        className="absolute left-[6.5%] top-[35%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() =>
          window.open("mailto:rafael.barbosa51@gmail.com", "_blank")
        }
      >
        <svg
          className="h-12 w-12 fill-white/80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Email
        </div>
      </div>
      {/* Bin */}
      <div
        className="absolute right-[3.5%] top-[20%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() => openWinBox("Recycle Bin", 500, 350, null, <Trash />)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-12 w-12"
        >
          <path
            fill="#bdbdbd"
            d="M27,43.95v1.93c-0.33,0.01-0.66-0.04-0.98-0.15l-15.33-5.05C10.28,40.54,10,40.16,10,39.73v-1.38	L27,43.95z"
          ></path>
          <polygon
            fill="#e0e0e0"
            points="22.18,3.4 22.18,14.39 6.2,9"
          ></polygon>
          <polygon fill="#eee" points="6,9 10,38.35 27,43.95 27,16"></polygon>
          <path
            fill="#0277bd"
            d="M21.666,25.711l-2.557,0.73l2.018,4.169l1.106,0.402c0.367,0.126,0.596-0.027,0.876-0.397	c0.25-0.415,0.358-1.082,0.013-1.921l-0.025-0.077L21.666,25.711"
          ></path>
          <path
            fill="#0277bd"
            d="M14.88,19.089c-0.571-0.208-1.234-0.217-1.602,0.271l-0.031,0.049l-1.123,1.976l2.771,2.669	l1.68-2.721l-0.709-1.447c-0.238-0.453-0.523-0.62-0.705-0.694l-0.228-0.083C14.916,19.103,14.898,19.096,14.88,19.089"
          ></path>
          <path
            fill="#0277bd"
            d="M16.752,29.054l-3.911-1.423l-0.465,0.814L12.3,28.614c-0.077,0.262,0.004,0.587,0.216,1.065	l-0.147-0.303c0.242,0.679,0.855,1.606,1.771,2.041l0.064,0.031l2.559,0.931L16.752,29.054"
          ></path>
          <path
            fill="#0091ea"
            d="M18.708,28.559l-1.338,2.366l1.689,3.437l-0.061-1.192l1.795,0.653	c0.025,0.012,0.05,0.022,0.075,0.031c0.182,0.066,0.344,0.042,0.454-0.224l1.796-3.029c-0.003,0.004-0.007,0.008-0.01,0.013	c-0.28,0.37-0.509,0.523-0.876,0.397l-1.106-0.402l-2.344-0.853L18.708,28.559"
          ></path>
          <path
            fill="#0091ea"
            d="M15.11,19.172c-0.038-0.014-0.069-0.023-0.091-0.032l0.144,0.052	C15.143,19.185,15.126,19.178,15.11,19.172 M18.86,20.533c-0.033-0.012-0.067-0.023-0.104-0.032l-3.593-1.308	c0.182,0.075,0.467,0.242,0.705,0.694l0.709,1.447l1.217,2.484l-0.895,0.263l3.049,1.095l1.332-2.345l-0.909,0.25l-0.998-2.031	C19.279,20.826,19.143,20.636,18.86,20.533"
          ></path>
          <path
            fill="#0091ea"
            d="M13.135,23.285l-3.029-1.102l0.978,0.952l-0.797,1.386c-0.1,0.152-0.136,0.343,0.081,0.739	l2.001,4.117l0.147,0.303c-0.212-0.478-0.293-0.803-0.216-1.065c0.013-0.044,0.03-0.086,0.052-0.127l0.024-0.042l0.465-0.814	l1.035-1.812l0.984,0.939L13.135,23.285"
          ></path>
          <path
            fill="#757575"
            d="M39,39.64v1.42c0,0.42-0.27,0.79-0.66,0.94l-10.37,3.7c-0.31,0.11-0.64,0.17-0.97,0.18v-1.93	L39,39.64z"
          ></path>
          <polygon
            fill="#e0e0e0"
            points="27,16 27,43.95 39,39.64 43.7,10.4"
          ></polygon>
          <polygon
            fill="#eee"
            points="43.5,10.4 27,16 22.18,14.39 22.18,3.5"
          ></polygon>
          <path
            fill="#f5f5f5"
            d="M22.185,3.818l19.932,6.585L27,15.473L7.541,8.987L22.185,3.818 M22.18,3.29L6,9l21,7l16.7-5.6	L22.18,3.29L22.18,3.29z"
          ></path>
          <polygon
            fill="#919191"
            points="7.55,8.994 22,3 27.481,8.481 27,15.473"
          ></polygon>
          <polygon fill="#c4c4c4" points="7.55,8.994 16,3 27,15.473"></polygon>
          <polygon fill="#919191" points="31,3 25,6 27.028,15.5"></polygon>
          <polygon fill="#e0e0e0" points="16,3 22,3 19.012,6.417"></polygon>
          <polygon
            fill="#c4c4c4"
            points="27,15.473 31,3 42.117,10.403"
          ></polygon>
          <polygon
            fill="#919191"
            points="26.929,15.415 10.585,6.882 7.55,8.994"
          ></polygon>
          <polygon
            fill="#919191"
            points="39.531,8.675 27,15.473 42.117,10.403"
          ></polygon>
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Recycle Bin
        </div>
      </div>
      {/* GitHub */}
      <div
        className="absolute left-[20.5%] top-[35%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() => window.open("https://github.com/rbarbosa51", "_blank")}
      >
        <img
          width={"48px"}
          height={"48px"}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
        />
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          GitHub
        </div>
      </div>
      {/* Linked In */}
      <div
        className="absolute left-[19.5%] top-[55%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() =>
          window.open("https://www.linkedin.com/in/rafaelbarbosa51/", "_blank")
        }
      >
        <img
          width="48px"
          height="48px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt=""
        />
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          LinkedIn
        </div>
      </div>
      {/* Terminal */}
      <div
        className="absolute bottom-[20%] right-[23.5%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() => openWinBox("Terminal", 500, 170, null, <Terminal />)}
      >
        <svg
          className="h-12 w-12 fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
            clipRule="evenodd"
          />
        </svg>
        <div className="bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Terminal
        </div>
      </div>
      {/* ShareFolder */}
      <div
        className="absolute right-[40.5%] top-[20%] flex flex-col items-center justify-center text-xs text-blue-600 md:text-sm"
        onClick={() => openWinBox("Share", 500, 350, null, <Share />)}
      >
        <svg
          className="h-12 w-12"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFA000"
            d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"
          ></path>
          <path
            fill="#FFCA28"
            d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
          ></path>
        </svg>
        <div className="ml-1 mt-2 bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent underline">
          Share
        </div>
      </div>
      
      {/* Windows */}
      {windows}
    </div>
  );
}

