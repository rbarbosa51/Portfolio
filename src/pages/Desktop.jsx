import 'winbox/dist/css/winbox.min.css';
import WinBox from 'react-winbox';
import { useState } from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from '@nextui-org/react';


const Window = ({id, title, url, children}) => {
    return (
      <WinBox title={title} id={id} width={500} height={300} url={url} x={'center'} y={'center'} >
        {children}
      </WinBox>
    )
  }
const Thanks = () => {
    return (
        <div className='px-4'>
            <h1 className='text-center text-xl font-bold text-blue-600'>Thank You</h1>
            <p className='first-letter:ml-2'>Thank you for visiting my site. I sincerely appreciate your visit, and from the bottom of my heart hope that you found it:</p>
            <ul className='list-disc mt-2 font-bold'>
                <li className='ml-4'>Entertaining</li>
                <li className='ml-4'>Captivating</li>
                <li className='ml-4'>Humorous</li>
                <li className='ml-4'>Informative</li>
            </ul>
            <p className='mt-2 first-letter:ml-2'>Please feel free to contact me, so we may work on future projects. I look forward to working for you.</p>
            <p className='font-bold'>Rafael</p>
        </div>
    )
}
export default function Desktop() {
    const [windows, setWindows] = useState([]);
    const [windowCount, setWindowCount] = useState(0);
    
    const openWinBox = (title, url, children) => {
      setWindows([<Window key={windowCount + 1} title={title} url={url} children={children}/>, ...windows])
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
                            <DropdownItem key='thanks' onClick={() => openWinBox('Thanks', null, <Thanks/>)}>Thanks</DropdownItem>
                            <DropdownItem key='exit'>Exit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='bg-slate-200/50'>
                        <DropdownTrigger><Button variant='' className='text-md md:text-xl hover:bg-slate-100'>Terminal</Button></DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key='about'>About</DropdownItem>
                            <DropdownItem key='exit'>Exit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='text-md md:text-xl hover:bg-slate-100'>

                    {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'}) }
                </div>
            </div>
            {/* Icons */}
            {/* Wikipedia */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[25%] left-[15%]' onClick={() => openWinBox('Wikipedia', 'http://www.wikipedia.com', null)}>
                <svg className='scale-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                </svg>
                <div className='underline' >Wikipedia</div>
            </div>
            {/* Windows */}
            {windows}
        </div>
    )
}

//class="w-6 h-6"