import { memo } from "react"

function HtmlLoading() {
    
    return (
            <div className="h-screen bg-slate-200 flex justify-center items-center">
                <progress className="progress w-64" ></progress>
            </div>
    )
}
export default memo(HtmlLoading)