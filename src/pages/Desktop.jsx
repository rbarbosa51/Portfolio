import 'winbox/dist/css/winbox.min.css';
import WinBox from 'react-winbox';
import { useState } from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Window = ({id, title, width, height, url, children}) => {
    return (
      <WinBox title={title} id={id} width={width} height={height} url={url} x={'center'} y={'center'} >
        {children}
      </WinBox>
    )
  }
const Thanks = () => (
        <div className='px-4'>
            <h1 className='text-center text-xl font-bold text-blue-600'>Thank You</h1>
            <p className='first-letter:ml-2'>Thank you for visiting my site. I sincerely appreciate your visit, and from the bottom of my heart, I hope that you found it:</p>
            <ul className='list-disc mt-2 font-bold'>
                <li className='ml-4'>Entertaining</li>
                <li className='ml-4'>Captivating</li>
                <li className='ml-4'>Humorous</li>
                <li className='ml-4'>Informative</li>
            </ul>
            <p className='mt-2 first-letter:ml-2'>Please feel free to contact me, so we may work on future projects. I look forward to working for you.</p>
            <p className='font-bold text-right mr-4 text-2xl font-cursive'>Rafael</p>
        </div>
    
)
export default function Desktop() {
    const [windows, setWindows] = useState([]);
    const [windowCount, setWindowCount] = useState(0);
    const navigate = useNavigate();

    const openWinBox = (title, width, height, url, children) => {
      setWindows([<Window key={windowCount + 1} title={title} width={width} height={height} url={url} children={children}/>, ...windows])
      setWindowCount(prev => ++prev)
    }
    return (
        <div className='relative h-screen bg-gradient-to-b from-blue-100 to-blue-400'>
            <div className='w-full h-full flex justify-center items-center'>
                <h1 className='text-5xl md:text-7xl text-black/10 font-bold'>Rafael's Desktop</h1>

            </div>
            {/* Bar */}
            <div className='absolute bg-slate-200/50 top-0 border-1 border-black/10 w-full h-8 flex justify-between items-center p-8'>
                <div className='flex gap-2'>
                    <Dropdown className='bg-slate-200/50'>
                        <DropdownTrigger><Button variant='' className='text-md md:text-xl hover:bg-slate-100'>File</Button></DropdownTrigger>
                        <DropdownMenu className=''>
                            <DropdownItem key='thanks' onClick={() => openWinBox('Thanks', 500, 350, null, <Thanks/>)}>Thanks</DropdownItem>
                            <DropdownItem key='exit' onClick={() => navigate('/')}>Exit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='bg-slate-200/50'>
                        <DropdownTrigger><Button variant='' className='text-md md:text-xl hover:bg-slate-100'>Info</Button></DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key='about'>Placeholder 1</DropdownItem>
                            <DropdownItem key='exit'>Placeholder 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='text-md md:text-xl hover:bg-slate-100'>

                    {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'}) }
                </div>
            </div>
            {/* Icons */}
            {/* Wikipedia */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[20%] left-[15%]' onClick={() => openWinBox('Wikipedia',500,300, 'https://www.wikipedia.com', null)}>
                <svg className='scale-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                </svg>
                <div className='underline' >Wikipedia</div>
            </div>
            {/* Resume */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[55%] left-[3%]' onClick={() => window.open('https://drive.google.com/file/d/1TpmA0hnA6PjHiS66V1CX972sd64GfHQq/view?usp=sharing', '_blank')}>
                <svg className='scale-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <div className='underline' >Resume</div>
            </div>
            {/* Email */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[35%] left-[3.5%]' onClick={() => window.open('mailto:rafael.barbosa51@gmail.com', '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                <div className='underline' >Email</div>
            </div>
            {/* Windows */}
            {windows}
        </div>
    )
}

//class="w-6 h-6"