import AmazonBook from "../components/AmazonBook";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Button } from "@nextui-org/react";

function Book() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400">
      {/* <button
        className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        onClick={() => navigate("/room")}
      >
        Back
      </button> */}
      <Button
        //className="neonText absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bottom-2 lg:top-4"
        className="neonText absolute left-4 top-4 z-50 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
      <div className="flex items-center justify-center">
        <AmazonBook />
      </div>
    </div>
  );
}
export default memo(Book);
