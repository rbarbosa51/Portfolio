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
                sourceCode={'https://github.com/rbarbosa51/westeros-coffee'}
                ></Card>
              </div> 

              <div id="item2" className="carousel-item w-full">
                <Card picture={'/projects/girlboss.png'} 
                title={'Girl Boss App'}
                description={'This is the Girl Boss App, a SPA MERN site. It provides a set of tools for organizational purposes. It includes a KanBan board, a Scheduler, and Quotes. Please enjoy'}
                badges={['Express', 'TypeScript', 'MongoDB', 'React','React-Router' , 'Prisma', 'RadixUI', 'Shadcn-ui']}
                url={'https://girl-boss-app.netlify.app/'}
                stack={'MERN'}
                sourceCode={'https://github.com/rbarbosa51/girl-boss-app'}
                ></Card>
              </div> 
              <div id="item3" className="carousel-item w-full">
                <Card picture={'/projects/mlfinger.png'} 
                title={'Machine Learning Finger Trails'}
                description={'This page is an example of Google\'s Mediapipe Solutions. The library is bult on top of TensorFlow Lite. It uses the hand landmark detection features to create a trail of hearts around the index finger.'}
                badges={['mediapipe', 'material-components-web', 'JavaScript', 'Vite']}
                url={'https://machine-learning-finger-trails.netlify.app/'}
                stack={'Machine_Learning'}
                sourceCode={'https://github.com/rbarbosa51/machine-learning-finger-trails'}
                ></Card>
              </div> 
              <div id="item4" className="carousel-item w-full">
                <Card picture={'/projects/toxicity.png'} 
                title={'TensorFlow.JS Toxicity Detector'}
                description={'This page is an example of TensorFlow.JS Toxicity Detection AI model. It also utilizes the Web Speech API to transpile your speech to text. While it is not error proof, it does illustrate the potential uses of Artificial Intelligence in detecting toxic language. '}
                badges={['TensorFlow.JS', 'JavaScript', 'Vite']}
                url={'https://rbarbosa51.github.io/TensorFlow.JS_Toxicity_Detector/'}
                stack={'Machine_Learning'}
                sourceCode={'https://github.com/rbarbosa51/TensorFlow.JS_Toxicity_Detector'}
                ></Card>
              </div> 

              <div id="item5" className="carousel-item w-full">
                <Card picture={'/projects/whatacrypto.png'} 
                title={'Whatacrypto Crypto Game'}
                description={'WhataCrypto is a cryptocurrency game that allows people to make decisions on how and when to buy and sell crypto. WhataCrypto promotes strategic thinking and gives people opportunities to learn in a low stakes environment.'}
                badges={['JavaScript', 'ChartJS', 'Firebase', 'BulmaCSS']}
                url={'https://rbarbosa51.github.io/whatacrypto-crypto-game/'}
                stack={'Vanilla'}
                sourceCode={'https://github.com/rbarbosa51/whatacrypto-crypto-game'}
                ></Card>
              </div>
              <div id="item6" className="carousel-item w-full">
                <Card picture={'/projects/weather.png'} 
                title={'Glass Weather Dashboard'}
                description={'Glass Weather Dashboard is a webapp designed to enable a person to determine the current and 5 day forcasted weather condition for any arbitrary city. The webapp uses the Glassmorphism UI scheme.'}
                badges={['JavaScript']}
                url={'https://rbarbosa51.github.io/Glass-Weather-Dashboard/'}
                stack={'Vanilla'}
                sourceCode={'https://github.com/rbarbosa51/Glass-Weather-Dashboard'}
                ></Card>
              </div>
              <div id="item7" className="carousel-item w-full">
                <Card picture={'/projects/particles.png'} 
                title={'JSParticleEffect'}
                description={'HTML5 Canvas Particles Example'}
                badges={['JavaScript', 'Canvas']}
                url={'https://rbarbosa51.github.io/JSParticleEffect/'}
                stack={'Vanilla'}
                sourceCode={'https://github.com/rbarbosa51/JSParticleEffect'}
                ></Card>
              </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-sm">1</a> 
              <a href="#item2" className="btn btn-sm">2</a> 
              <a href="#item3" className="btn btn-sm">3</a> 
              <a href="#item4" className="btn btn-sm">4</a>
              <a href="#item5" className="btn btn-sm">5</a>
              <a href="#item6" className="btn btn-sm">6</a>
              <a href="#item7" className="btn btn-sm">7</a>
            </div>
        </div>
    )
}