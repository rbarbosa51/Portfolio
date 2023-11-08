import './Book.css'
import AmazonBook from "../components/AmazonBook"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Book() {
    
    return (
        <div className='bookPage '> 
            
            <div className='flex justify-center items-center'>
            <AmazonBook />

            </div>
            
        </div>
    )
}