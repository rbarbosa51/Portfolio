import Card from "./Card"

export default function Carousel() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="carousel max-w-[80%]">
              <div id="item1" className="carousel-item w-full">
                
                <Card picture={'/projects/westeros.png'} 
                title={'Westeros Coffee Store'}
                description={'This is the Westeros Coffee shop. It simulates purchasing Game of Thrones inspired Coffee.'}
                badges={['NextJS', 'TypeScript' ,'Stripe-API', 'Zustand', 'TailwindCSS', 'daisyui']}
                url={'https://westeros-coffee.vercel.app/'}
                stack={'JAMStack'}
                ></Card>
              </div> 

              <div id="item2" className="carousel-item w-full">
                <Card picture={'/projects/girlboss.png'} 
                title={'Girl Boss App'}
                description={'This is the Girl Boss App, a SPA MERN site. It provides a set of tools for organizational purposes. It includes a KanBan board, a Scheduler, and Quotes. Please enjoy'}
                badges={['Express', 'TypeScript', 'MongoDB', 'React', 'Prisma', 'RadixUI', 'Shadcn-ui']}
                url={'https://girl-boss-app.netlify.app/'}
                stack={'MERN'}
                ></Card>
              </div> 

              <div id="item3" className="carousel-item w-full">
                <Card picture={'/projects/toxicity.png'} 
                title={'TensorFlow.JS Toxicity Detector'}
                description={'This page is an example of TensorFlow.JS Toxicity Detection AI model. It also utilizes the Web Speech API to transpile your speech to text. While it is not error proof, it does illustrate the potential uses of Artificial Intelligence in detecting toxic language. '}
                badges={['TensorFlow.JS', 'JavaScript', 'Vite']}
                url={'https://rbarbosa51.github.io/TensorFlow.JS_Toxicity_Detector/'}
                stack={'Vanilla'}
                ></Card>
              </div> 

              <div id="item4" className="carousel-item w-full">
                <Card picture={'https://picsum.photos/id/78/300/200'} 
                title={'Test Titulo'}
                description={'Description Basica'}
                badges={['Excellent', 'C++', 'HTML']}
                ></Card>
              </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-sm">1</a> 
              <a href="#item2" className="btn btn-sm">2</a> 
              <a href="#item3" className="btn btn-sm">3</a> 
              <a href="#item4" className="btn btn-sm">4</a>
            </div>
        </div>
    )
}