import Game from "../components/Game"
import { useNavigate } from "react-router-dom"
import { Button } from "@nextui-org/react"


export default function Arcade() {
    const navigate = useNavigate()
    
    return (
        <div className="w-full h-screen relative">
            <Game />
            <Button className="absolute z-100 top-0 left-20 rounded-full p-2" 
                color="primary"
                onClick={() => navigate('/')}
            >Go Back</Button>
        </div>
    )
}