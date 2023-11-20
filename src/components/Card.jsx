
export default function Card({picture, title, description, badges, stack, url, sourceCode }) {
    return (
        <>
            <div className="card md:card-side min-w-full bg-base-100/30 shadow-lg">
              <figure className="max-w-[500px] mx-auto"><img src={picture} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <div className="text-primary">{title}</div>
                  <div className="badge badge-secondary text-center mx-4">{stack}</div>
                </h2>
                <p className="first-letter:ml-4">{description}</p>
                <div className="mx-auto">
                    {badges.map((badge, i) => (
                        <div key={i} className="badge text-white/80 border-none bg-primary m-1">{badge}</div> 
                    ))}
                </div>
                <div>Source: <a className="text-primary underline" href={`${sourceCode}`} target="_blank">{sourceCode}</a></div>
                <div className="card-actions mt-2">
                    <button className="btn btn-outline bg-primary hover:bg-primary/80 border-none mx-auto hover:neonText" onClick={() => window.open(url, '_blank')}>{title}</button>
                </div>
              </div>
            </div>
            
        </>
    )
}
