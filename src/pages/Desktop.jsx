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
const HumanLanguages = () => (
    <div className='px-6 flex flex-col justify-center items-center'>
            <h1 className='text-center text-xl font-bold text-blue-600'>Languages</h1>
            <p className='first-letter:ml-2 text-justify mt-2'>I can speak/read/write in the following Languages:</p>
            <table className='table-fixed font-medium border border-black/20 mt-4' >
                <thead className='bg-gray-100 border-b-2 border-black/20'>
                    <tr>
                        <th className='px-4'>Language</th>
                        <th className='px-4'>Proficiency</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr>
                        <td className='px-4'>English</td>
                        <td className='px-4'>Professional working proficiency</td>
                    </tr>
                    <tr>
                        <td className='px-4 bg-gray-100'>Spanish</td>
                        <td className='px-4 bg-gray-100'>Professional working proficiency</td>
                    </tr>
                    <tr>
                        <td className='px-4'>German</td>
                        <td className='px-4'>Beginner - Very Low Proficiency</td>
                    </tr>
                </tbody>
            </table>
        </div>
)
const Skills = () => (
    <div className='px-6'>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-xl font-bold text-blue-600 mt-2'>Skills</h1>
            <p className='first-letter:ml-2 text-justify'>This is a non-exclusive list of my skills. Ask me for more info.</p>
        </div>
        <div className='flex flex-wrap gap-4 mt-4 w-[90%] mx-auto'>
            <div className='font-bold '>HTML5 <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' /></div>
            <div className='font-bold'>CSS3 <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' /></div>
            <div className='font-bold'>JavaScript <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' /></div>
            <div className='font-bold'>TypeScript <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' /></div>
            <div className='font-bold'>Node.JS <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' /></div>
            <div className='font-bold'>Express <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' /></div>
            <div className='font-bold'>React <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' /></div>
            <div className='font-bold'>C/C++ <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg' /></div>
            <div className='font-bold'>Python <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' /></div>
            <div className='font-bold'>MySQL <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' /></div>
            <div className='font-bold'>MongoDB <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' /></div>
            <div className='font-bold'>Java <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' /></div>
            <div className='font-bold'>Blender <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' /></div>
            <div className='font-bold'>Three.JS <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' /></div>
            <div className='font-bold'>Next.JS <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' /></div>
            <div className='font-bold'>TailwindCSS <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' /></div>
            <div className='font-bold'>GraphQL <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' /></div>
            <div className='font-bold'>Bootstrap <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' /></div>
            <div className='font-bold'>BulmaCSS <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg' /></div>
            <div className='font-bold'>Firebase <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' /></div>
            <div className='font-bold'>Redux Toolkit <img className='inline' width='24' height='24' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' /></div>
        </div>
        <p className='text-center mt-4'>I am also a fast learner and will learn any new skills to meet your team's visions and goals.</p>
    </div>
)
const Trash = () => (
    <div className='relative flex top-4 left-2 gap-8'>
        <div className='flex flex-col justify-center items-center'>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-8 h-8 fill-slate-300">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
            <div>deletedFile.txt</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-red-500">
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
                            <DropdownItem key='languages' onClick={() => openWinBox('Human Languages', 500, 300, null, <HumanLanguages />)} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Human Languages</DropdownItem>
                            <DropdownItem key='skills' onClick={() => openWinBox('Skills', 700,400,null, <Skills />)} className='bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>Skills</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='text-md md:text-xl hover:bg-slate-100 bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent'>

                    {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'}) }
                </div>
            </div>
            {/* Icons */}
            {/* Wikipedia */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[20%] left-[35%] text-blue-600' onClick={() => openWinBox('Wikipedia',500,300, 'https://www.wikipedia.com', null)}>
                <svg className='h-12 w-12 fill-blue-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Wikipedia</div>
            </div>
            
            {/* Resume */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[55%] left-[3%] text-blue-600' onClick={() => window.open('https://drive.google.com/file/d/1TpmA0hnA6PjHiS66V1CX972sd64GfHQq/view?usp=sharing', '_blank')}>
                <svg className='h-12 w-12 fill-white/80' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Resume</div>
            </div>
            {/* Email */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[35%] left-[6.5%] text-blue-600' onClick={() => window.open('mailto:rafael.barbosa51@gmail.com', '_blank')}>
                <svg className='h-12 w-12 fill-white/80' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Email</div>
            </div>
            {/* Bin */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[20%] right-[3.5%] text-blue-600' onClick={() => openWinBox('Recycle Bin', 500, 350, null, <Trash/>)}>
                <svg className='h-12 w-12 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                </svg>
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >Recycle Bin</div>
            </div>
            {/* GitHub */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[35%] left-[20.5%] text-blue-600' onClick={() => window.open('https://github.com/rbarbosa51', '_blank')}>
                {/* <svg className='h-12 w-12 text-blue-700' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill='currentColor' ><g><path d="M12,0c-6.627,0 -12,5.508 -12,12.304c-0,5.436 3.438,10.048 8.206,11.675c0.6,0.114 0.82,-0.267 0.82,-0.592c-0,-0.293 -0.011,-1.262 -0.016,-2.291c-3.339,0.745 -4.043,-1.451 -4.043,-1.451c-0.546,-1.422 -1.333,-1.801 -1.333,-1.801c-1.088,-0.763 0.083,-0.747 0.083,-0.747c1.204,0.086 1.839,1.268 1.839,1.268c1.07,1.88 2.807,1.337 3.492,1.022c0.108,-0.795 0.419,-1.338 0.762,-1.645c-2.665,-0.311 -5.468,-1.366 -5.468,-6.08c0,-1.344 0.469,-2.441 1.237,-3.303c-0.125,-0.31 -0.535,-1.561 0.116,-3.256c0,0 1.008,-0.331 3.301,1.261c0.957,-0.273 1.984,-0.41 3.004,-0.414c1.019,0.004 2.047,0.141 3.006,0.414c2.29,-1.592 3.296,-1.261 3.296,-1.261c0.654,1.694 0.243,2.946 0.118,3.255c0.77,0.862 1.235,1.96 1.235,3.303c0,4.726 -2.807,5.766 -5.479,6.071c0.431,0.382 0.814,1.131 0.814,2.278c0,1.647 -0.014,2.972 -0.014,3.377c0,0.327 0.216,0.711 0.824,0.59c4.766,-1.629 8.2,-6.239 8.2,-11.673c-0,-6.795 -5.373,-12.304 -12,-12.304l-0,0Z" /><path d="M4.545,17.665c-0.026,0.062 -0.12,0.08 -0.206,0.038c-0.087,-0.04 -0.136,-0.123 -0.108,-0.185c0.026,-0.063 0.12,-0.08 0.207,-0.038c0.087,0.04 0.137,0.124 0.107,0.186l-0,-0.001Zm0.486,0.556c-0.057,0.055 -0.169,0.03 -0.245,-0.057c-0.078,-0.085 -0.093,-0.2 -0.035,-0.255c0.059,-0.054 0.168,-0.029 0.246,0.057c0.079,0.087 0.094,0.2 0.034,0.256l0,-0.001Zm0.473,0.709c-0.073,0.052 -0.194,0.003 -0.268,-0.106c-0.073,-0.11 -0.073,-0.241 0.002,-0.294c0.074,-0.052 0.193,-0.005 0.268,0.104c0.073,0.111 0.073,0.242 -0.002,0.296l0,-0Zm0.648,0.685c-0.065,0.074 -0.206,0.054 -0.308,-0.047c-0.105,-0.099 -0.134,-0.241 -0.068,-0.315c0.067,-0.074 0.207,-0.054 0.311,0.047c0.104,0.099 0.136,0.24 0.066,0.314l-0.001,0.001Zm0.895,0.397c-0.03,0.096 -0.164,0.14 -0.3,0.099c-0.136,-0.042 -0.225,-0.155 -0.197,-0.252c0.028,-0.097 0.163,-0.143 0.3,-0.099c0.136,0.042 0.225,0.154 0.197,0.252Zm0.982,0.074c0.003,0.101 -0.112,0.185 -0.255,0.187c-0.143,0.004 -0.259,-0.079 -0.261,-0.179c0,-0.102 0.113,-0.185 0.256,-0.188c0.143,-0.002 0.26,0.079 0.26,0.179l-0,0.001Zm0.913,-0.16c0.018,0.099 -0.082,0.201 -0.223,0.228c-0.139,0.026 -0.269,-0.035 -0.286,-0.133c-0.017,-0.102 0.083,-0.203 0.223,-0.23c0.141,-0.025 0.269,0.035 0.286,0.136l0,-0.001Z" /></g></svg> */}
                <img width={'48px'} height={'48px'} src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'/>
                {/* <img src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/github/github-original.svg" width={'42px'} height={'42px'} />     */}
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >GitHub</div>
            </div>
            {/* Linked In */}
            <div className='flex flex-col items-center justify-center text-xs md:text-sm absolute top-[55%] left-[19.5%] text-blue-600' onClick={() => window.open('https://www.linkedin.com/in/rafaelbarbosa51/', '_blank')}>
                <img width='48px' height='48px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />

                {/* <img src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/github/github-original.svg" width={'42px'} height={'42px'} />     */}
                <div className='underline bg-gradient-to-r bg-clip-text from-blue-700 to-red-500 text-transparent' >LinkedIn</div>
            </div>
            {/* Windows */}
            {windows}
        </div>
    )
}
