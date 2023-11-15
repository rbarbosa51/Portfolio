import { useNavigate } from 'react-router-dom'

export default function Cell() {
    const navigate = useNavigate();

    return (
        <div className='h-screen bg-gradient-to-br from-blue-400 to-pink-400'> 
            <button className="absolute bg-primary hover:bg-primary/80 rounded-xl px-6 py-2.5 text-sm text-white top-4 left-4" onClick={() => navigate('/')}>Back</button>
            <div className='flex justify-center items-center'>
            
            <div className="mockup-phone border-primary">
              <div className="camera"></div> 
              <div className="display">
                <div className="artboard artboard-demo phone-1 p-8">
                    <h1 className='mb-16 text-5xl font-thin'>Contact me</h1>
                    <div className='flex gap-4 flex-wrap justify-center items-center'>
                        <a className='btn btn-outline btn-info' target='_blank' href="mailto:rafael.barbosa51@gmail.com">E-mail</a>
                        <a className='btn btn-outline btn-info' target='_blank' href="https://github.com/rbarbosa51">GitHub</a>
                        <a className='btn btn-outline btn-info' target='_blank' href="https://www.linkedin.com/in/rafaelbarbosa51/">LinkedIn</a>
                        {/* <a className='btn btn-outline btn-info' target='_blank' href="http://www.google.com">Google</a> */}
                        
                    </div>
                </div>
              </div>
            </div>


            </div>
        </div>
    )
}