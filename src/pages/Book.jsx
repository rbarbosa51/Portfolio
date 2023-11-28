import AmazonBook from "../components/AmazonBook";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

function Book() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400">
      <button
        className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        onClick={() => navigate("/room")}
      >
        Back
      </button>
      <div className="flex items-center justify-center">
        <AmazonBook />
      </div>
    </div>
  );
}
export default memo(Book);
