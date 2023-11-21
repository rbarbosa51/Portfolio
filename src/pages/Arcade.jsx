import Game from "../components/Game";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

function Arcade() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
      <Game />
      <button
        className="neonText absolute left-20 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        onClick={() => navigate("/room")}
      >
        Back
      </button>
    </div>
  );
}
export default memo(Arcade);
