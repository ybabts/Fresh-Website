

import { JSX } from "preact";
import { ComponentChildren } from "preact";

interface Page {
    href: string,
    children: ComponentChildren;
}

function Page(props: Page) {
    return (
        <a href={props.href} class='ml-5 mr-5 justify-center'>
            {props.children}
        </a>
    )
}

export default function Navbar() {
    return (
        <nav class='w-full backdrop-blur p-4 fixed bg-tBlack text-white flex flex-row z-50' style='backdrop-filter: blur(4px);'>
            <svg class='w-6 inline-block mr-3 hidden' focusable='false' viewBox='0 0 24 24'>
                <path fill='white' d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
            </svg>
            <div class='flex flex-row flex-grow align-middle justify-center font-bold'>
                <Page href='/#about-me'>About Me</Page>
                <Page href='/#projects'>Projects</Page>
            </div>
        </nav>
    );
}