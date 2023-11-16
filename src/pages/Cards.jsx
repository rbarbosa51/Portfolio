import TCards from "../components/tCards"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

export default function Cards() {
    const navigate = useNavigate()
    return (
        <div className="h-screen relative">
            <TCards />
            <Button className="absolute top-4 left-4" color="primary" onClick={() => navigate('/room')}>Back</Button>
        </div>
    )
}