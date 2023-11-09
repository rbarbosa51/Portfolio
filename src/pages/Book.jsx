import AmazonBook from "../components/AmazonBook"
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
export default function Book() {
    const navigate = useNavigate();
    return (
        <div className='h-screen bg-gradient-to-br from-blue-400 to-pink-400'> 
            <div className="absolute top-4 left-4" >
                <Button color='primary' onClick={() => navigate('/')}>Back</Button>
            </div>
            <div className='flex justify-center items-center'>
            <AmazonBook />
            </div>
        </div>
    )
}
