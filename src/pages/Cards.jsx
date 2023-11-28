import TCards from "../components/tCards";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  return (
    <div className="min-w-screen relative h-screen">
      <TCards />
      <Button
        className="neonText absolute left-4 top-4"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
    </div>
  );
}
