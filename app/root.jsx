import {
  Links,
  Meta,
  Scripts,
  useOutlet,
  useLocation,
  useLoaderData,
  ScrollRestoration,
  json,
} from "@remix-run/react";
import styles from "./styles/tailwind.css?url";
import { useState, useRef } from "react";
import Header from "./components/Header";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { MenuProvider } from "./contexts/MenuContext.jsx";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const { images, loading } = useLoaderData() || {};
  const nodeRef = useRef(null);
  function AnimatedOutlet() {
    const [outlet] = useState(useOutlet());
    return outlet;
  }

  const pathLocation = useLocation().pathname;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+NO:wght@100..400&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {loading ? (
          <div id="loading-screen">
            {/* Add your loading screen content here */}
            <p>Loading....................</p>
          </div>
        ) : (
          <MenuProvider>
            {/* <ImageProvider images={images}> */}
            <Header
              showAbout={pathLocation === "/about"}
              isHome={pathLocation === "/"}
            />
            <SwitchTransition>
              <CSSTransition
                key={pathLocation}
                timeout={500}
                nodeRef={nodeRef}
                classNames={{
                  enter: "opacity-0",
                  enterActive: "opacity-100",
                  exitActive: "opacity-0",
                }}
              >
                <div ref={nodeRef} className="transition-all duration-500">
                  <AnimatedOutlet />
                </div>
              </CSSTransition>
            </SwitchTransition>
            <ScrollRestoration />
            <Scripts />
            {/* </ImageProvider> */}
          </MenuProvider>
        )}
      </body>
    </html>
  );
}
