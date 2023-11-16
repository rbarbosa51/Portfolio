import { useNavigate } from 'react-router-dom';
export default function First() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Welcome to my Room</h1>
            <button onClick={() => navigate('/room')}>Enter</button>
        </div>
    )
}