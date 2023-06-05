import { ComponentChildren } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const TAGLINES = [
    "Fresh is awesome",
    "Typescript is Great",
    "Preact is cool",
    "Deno is fun",
    "Rust go brrr"
];



export default function Navigator() {
    return (
        <h3 class='inline-block text-[2em] text-center font-thin'>
			{
                TAGLINES[Math.floor(Math.random() * TAGLINES.length)]
            }
		</h3>
    )
}