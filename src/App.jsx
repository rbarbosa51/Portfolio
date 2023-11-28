import { Suspense } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import {
  First,
  Cards,
  Desktop,
  Projects,
  Cell,
  Arcade,
  Book,
  Tv,
  HtmlLoading,
  Picture1,
  Picture2,
  Room,
} from "./pages";

function App() {
  const location = useLocation();

  console.log(
    "%cThank You for visiting my Portfolio. Please consider hiring me!",
    "font-weight: thin; color: #ff0000; font-size:3rem",
  );
  return (
    <NextUIProvider>
      <Routes location={location}>
        <Route path="/" exact element={<First />} />
        <Route
          path="/room"
          exact
          element={
            <Suspense fallback={<HtmlLoading />}>
              <Room />
            </Suspense>
          }
        />
        <Route path="/book" exact element={<Book />} />
        <Route path="/cards" exact element={<Cards />} />
        <Route
          path="/arcade"
          exact
          element={
            <Suspense fallback={<HtmlLoading />}>
              <Arcade />
            </Suspense>
          }
        />
        <Route path="/desktop" exact element={<Desktop />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/cell" exact element={<Cell />} />
        <Route path="/tv" exact element={<Tv />} />
        <Route
          path="/picture1"
          exact
          element={
            <Suspense fallback={<HtmlLoading />}>
              <Picture1 />
            </Suspense>
          }
        />
        <Route
          path="/picture2"
          exact
          element={
            <Suspense fallback={<HtmlLoading />}>
              <Picture2 />
            </Suspense>
          }
        />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
