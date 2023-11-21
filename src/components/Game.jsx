import { useEffect, useRef } from "react";

export default function Game() {
  const frameRef = useRef();
  useEffect(() => {
    frameRef.current.focus();
  }, []);
  return (
    <div className="h-screen w-full">
      <iframe
        ref={frameRef}
        id="jsdos"
        src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Foriginal%2F2X%2F2%2F24b00b14f118580763440ecaddcc948f8cb94f14.jsdos&anonymous=1"
        allowFullscreen
        className="h-full w-full"
      ></iframe>
    </div>
  );
}
