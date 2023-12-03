import TCards from "../components/tCards";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  return (
    <div className="min-w-screen relative h-screen">
      <TCards />
      <Button
        className="neonText absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:top-4 lg:translate-x-0"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
    </div>
  );
}
