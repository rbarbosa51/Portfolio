import './Book.css'
import AmazonBook from "../components/AmazonBook"

export default function Book() {
    
    return (
        <div className='bookPage h-screen'> 
            <div className='flex justify-center items-center'>
            <AmazonBook />
            </div>
        </div>
    )
}