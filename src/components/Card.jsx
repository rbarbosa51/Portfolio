export default function Card({
  picture,
  title,
  description,
  badges,
  stack,
  url,
  sourceCode,
}) {
  return (
    <>
      <div className="card min-w-full bg-base-100/30 shadow-lg md:card-side">
        <figure className="mx-auto max-w-[500px]">
          <img src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="text-primary">{title}</div>
            <div className="badge badge-secondary mx-4 text-center">
              {stack}
            </div>
          </h2>
          <p className="first-letter:ml-4">{description}</p>
          <div className="mx-auto">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="badge m-1 border-none bg-primary text-white/80"
              >
                {badge}
              </div>
            ))}
          </div>
          <div>
            Source:{" "}
            <a
              className="text-primary underline"
              href={`${sourceCode}`}
              target="_blank"
            >
              {sourceCode}
            </a>
          </div>
          <div className="card-actions mt-2">
            <button
              className="hover:neonText btn btn-outline mx-auto border-none bg-primary hover:bg-primary/80"
              onClick={() => window.open(url, "_blank")}
            >
              {title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
