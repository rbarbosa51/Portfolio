import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Button } from "@nextui-org/react";

function Cell() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400">
      {/* <Button
        className="neonText absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:top-4 lg:translate-x-0"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button> */}
      <Button
        //className="neonText absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bottom-2 lg:top-4"
        className="neonText absolute left-4 top-4 z-50 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
      <div className="flex items-center justify-center">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 p-8">
              <h1 className="mb-16 text-5xl font-thin ">Contact me</h1>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  className="btn btn-outline btn-info"
                  target="_blank"
                  href="mailto:rafael.barbosa51@gmail.com"
                  rel="noreferrer"
                >
                  E-mail
                </a>
                <a
                  className="btn btn-outline btn-info"
                  target="_blank"
                  href="https://github.com/rbarbosa51"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-outline btn-info"
                  target="_blank"
                  href="https://www.linkedin.com/in/rafaelbarbosa51/"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                {/* <a className='btn btn-outline btn-info' target='_blank' href="http://www.google.com">Google</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Cell);
