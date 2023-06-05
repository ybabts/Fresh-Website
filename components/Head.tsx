import { Head as RuntimeHead } from "$fresh/runtime.ts";


interface HeadProps {
    title?: string;
}

export default function Head(props: HeadProps) {
    return (
        <RuntimeHead>
            <title>{props.title ?? "Tyler Mueller"}</title>
            <link rel="stylesheet" href="https://unpkg.com/@speed-highlight/core/dist/themes/default.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/speed-highlight/core/dist/themes/default.css" />
            <script type="module" src="./js/speed_highlight.js" />
            
        </RuntimeHead>
    )
}