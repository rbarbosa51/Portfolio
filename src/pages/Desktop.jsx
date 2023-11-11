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
        <div className='px-6'>
            <h1 className='text-center text-xl font-bold text-blue-600'>Thank You</h1>
            <p className='first-letter:ml-2 text-justify'>Thank you for visiting my site. I sincerely appreciate your visit, and from the bottom of my heart, I hope that you found it:</p>
            <ul className='list-disc mt-2 font-bold'>
                <li className='ml-4'>Entertaining</li>
                <li className='ml-4'>Captivating</li>
                <li className='ml-4'>Humorous</li>
                <li className='ml-4'>Informative</li>
            </ul>
            <p className='mt-2 first-letter:ml-2 text-justify'>Please feel free to contact me, so we may work on future projects. I look forward to working for you.</p>
            <p className='font-bold text-right mr-4 text-2xl font-cursive text-blue-600'>Rafael</p>
        </div>
    
)
const AboutMe = () => (
    <div className='px-6'>
        <h1 className='text-center text-xl font-bold text-blue-600 '>About Me</h1>
        <p className='first-letter:ml-2 mt-2 text-justify'>Motivated, results-oriented, and dynamic professional with years of comprehensive experience in software development and engineering in innovative and constantly evolving environments. Skilled communicator, team player, and hands-on leader about to build relationships with teams, peers, and clients. Analytical and organized with fearless approach to problem solving and an aptitude for identifying opportunities to improve.</p>
    </div>
)
const Trash = () => (
    <div className='relative flex top-4 left-2 gap-8'>
        <div className='flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
            <div>deletedFile.txt</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>
            <div>spicyPicture.png</div>
        </div>
        <div className='flex flex-col justify-center items-center' onClick={() => window.open('https://www.youtube.com/watch?v=j9V78UbdzWI', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
            </svg>
            <div>DoNotClick.html</div>
        </div>
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
                <h1 className='text-5xl md:text-7xl bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent font-thin'>Rafael's Desktop</h1>

            </div>
            {/* Bar */}
            <div className='absolute bg-slate-200/50 top-0 border-1 border-black/10 w-full h-8 flex justify-between items-center p-8'>
                <div className='flex gap-2'>
                    <Dropdown className='bg-slate-200/50'>
                        <DropdownTrigger><Button variant='' className='text-md md:text-xl hover:bg-slate-100  bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>File</Button></DropdownTrigger>
                        <DropdownMenu className=''>
                            <DropdownItem key='thanks' onClick={() => openWinBox('Thanks', 500, 350, null, <Thanks/>)} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Thanks</DropdownItem>
                            <DropdownItem key='exit' onClick={() => navigate('/')} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='bg-slate-200/50'>
                        <DropdownTrigger><Button variant='' className='text-md md:text-xl hover:bg-slate-100 bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Info</Button></DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key='about' onClick={() => openWinBox('About Me', 500, 350, null, <AboutMe/>)} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>About Me</DropdownItem>
                            <DropdownItem key='exit' onClick={() => {}} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Placeholder 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='text-md md:text-xl hover:bg-slate-100 bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>

                    {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'}) }
                </div>
            </div>
            {/* Icons */}
            {/* Wikipedia */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[20%] left-[15%] text-blue-600' onClick={() => openWinBox('Wikipedia',500,300, 'https://www.wikipedia.com', null)}>
                <svg className='scale-75 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Wikipedia</div>
            </div>
            {/* Resume */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[55%] left-[3%] text-blue-600' onClick={() => window.open('https://drive.google.com/file/d/1TpmA0hnA6PjHiS66V1CX972sd64GfHQq/view?usp=sharing', '_blank')}>
                <svg className='scale-75' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Resume</div>
            </div>
            {/* Email */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[35%] left-[3.5%] text-blue-600' onClick={() => window.open('mailto:rafael.barbosa51@gmail.com', '_blank')}>
                <svg className='scale-125' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Email</div>
            </div>
            {/* Bin */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[20%] right-[3.5%] text-blue-600' onClick={() => openWinBox('Recycle Bin', 500, 350, null, <Trash/>)}>
                <svg className='scale-[65%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Recycle Bin</div>
            </div>
            {/* Windows */}
            {windows}
        </div>
    )
}

