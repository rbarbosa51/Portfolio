import TCards from "../components/tCards";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  return (
    <div className="min-w-screen relative h-screen">
      <TCards />
      {/* <Button
        className="neonText absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:top-4 lg:translate-x-0"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button> */}
      <Button
        //className="neonText absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bottom-2 lg:top-4"
        className="neonText absolute left-4 top-4 z-50 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
    </div>
  );
}
