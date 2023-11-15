import Game from "../components/Game"
import { useNavigate } from "react-router-dom"

export default function Arcade() {
    const navigate = useNavigate()
    
    return (
        <div className="w-full h-screen relative">
            <Game />
            <button className="absolute bg-primary hover:bg-primary/80 rounded-xl px-6 py-2.5 text-sm text-white top-4 left-20" onClick={() => navigate('/')}>Back</button>
        </div>
    )
}