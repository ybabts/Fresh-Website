import { AppProps } from "$fresh/server.ts";
import Head from "../components/Head.tsx";
import Navbar from "../components/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
        <head>
            <Head />
        </head>
        <body class="bg-black text-[#FAF9F6]">
            <Navbar />
            <Component />
        </body>
    </>
  );
}