import Carousel from "../components/Carousel"

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen gap-4 md:gap-16 bg-gradient-to-br from-blue-400 to-pink-400">
            <h1 className="text-center text-slate-200/80 font-thin text-6xl">Projects</h1>
            <Carousel />
        </div>
    )
}