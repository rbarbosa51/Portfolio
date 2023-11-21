import Carousel from "../components/Carousel";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-br from-blue-400 to-pink-400 md:gap-16">
        <h1 className="neonText text-center text-5xl font-thin text-slate-200/80 lg:text-6xl">
          Projects
        </h1>
        <Carousel />
      </div>

      <Button
        className="neonText absolute left-4 top-4"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
    </>
  );
}
