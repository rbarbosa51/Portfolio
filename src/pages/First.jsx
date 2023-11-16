import { useNavigate } from 'react-router-dom';
import { Button } from "@nextui-org/react"

export default function First() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-400 to-pink-400'>
            <h1 className='py-4 text-6xl text-center font-thin text-slate-200/80'>Welcome to my Room</h1>
            <div className="text-center text-2xl text-slate-200/80 font-thin mt-2">Please enter and enjoy my Developer Profile.</div>
            <Button className="absolute left-1/2 top-1/2 -translate-x-1/2" size='lg' color="primary" onClick={() => navigate('/room')}>Enter</Button>
        </div>
    )
}