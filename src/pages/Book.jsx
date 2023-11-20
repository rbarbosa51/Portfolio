import AmazonBook from "../components/AmazonBook"
import { useNavigate } from 'react-router-dom'
import { memo } from "react";

function Book() {
    const navigate = useNavigate();
    return (
        <div className='h-screen bg-gradient-to-br from-blue-400 to-pink-400'> 
            <button className="absolute bg-primary hover:bg-primary/80 rounded-xl px-6 py-2.5 text-sm text-white top-4 left-4 neonText" onClick={() => navigate('/room')}>Back</button>
            <div className='flex justify-center items-center'>
            <AmazonBook />
            </div>
        </div>
    )
}
export default memo(Book);
