import { highlightText } from 'https://deno.land/x/speed_highlight_js@1.1.11/src/index.js';
import Taglines from "../components/Taglines.tsx";



function demo() {
  console.log('hello world');
}

export default function Home() {
  
  return (
    <>
    <link rel="stylesheet" href="./css/smooth-scroll.css" />
    <link rel="stylesheet" href="./css/rainbow-rave.css" />
    <link rel="stylesheet" href="./css/spin.css" />
    <link rel="stylesheet" href="./css/cool-hover.css" />
    <link rel="stylesheet" href="./css/fade-in.css" />
		<div class='w-full bg-black sm:min-h-[600px] m:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px] flex flex-col justify-center overflow-hidden relative'>
			<img src='./assets/lilzidesigns-rTzIzsbBHi8-unsplash.jpg' class='absolute scale-[-1] animate-rainbow-fadein w-full' style='filter: contrast(1.5)'/>
			<div class='w-[500vw] h-[500vw] absolute z-0 animate-spin-slow left-[-200vw] top-[-240vw]' style='background: radial-gradient(black 0%, black 75%, transparent 95%); background-size: 35px 35px; backdrop-filter: blur(5px)'></div>
			<div class='mb-[10vh] font-bold z-10 text-white text-center block'>
				<h1 class='text-[5em] font-unisans-heavy tracking-wider leading-[4.5rem] inline-block'>
					Tyler Mueller
				</h1>
				<br/>
				<Taglines />
			</div>
		</div>
    <div class='w-full h-[5000px]'>
			<div class='w-full h-[600px] translate-y-[-600px] absolute' style='background: linear-gradient(to bottom, transparent, #000)'/>
      
      <div class="w-[85%] flex flex-col align-middle justify-center m-auto children:pb-4">
          <div class="children:(pb-3 text-2xl font-thin text-left) children:first:(text-5xl font-bold text-left)">
          <h1 id="about-me">About Me</h1>
          <p>
            I'm a software engineer that's passionate about building things that make developing software easier.
            I love building back-end applications and APIs, I'm not really a very good designer.
            I currently do not work in the software industry, but I'm always looking to learn and improve myself.
          </p>
          <p>
            I started programming bash in elementary school, and I mostly got distracted during class by programming.
            I made a few games in bash, one of which was a top down RPG that supported a janky multiplayer mode that
            used a shared file to communicate between clients. I also made a Guitar Hero clone in bash, which spawned
            a process that played a sound file and then waited for the user to press a key.
          </p>
          <p>
            Starting high school I took a course on programming in Visual Studio, and I learned the basics of programming.
            I took a course on HTML and CSS that year as well and learned how to make a website. Eventually I got into PHP
            and made a few websites and learned how to use MySQL. I wanted to make a framework for PHP that would allow for
            easier development of websites, and couldn't find a good way to do it in PHP, so I started learning JavaScript.
          </p>
          <p>
            Continuing to learn Javascript alongside my web development courses in high school and eventually learned that
            you can execute JavaScript on the server side with Node.js. I learned a lot about Node.js and made a few projects
            with it, but I eventually got hooked by Typescript and discovered Deno. After that I've been using Deno in place
            of Node.js for all of my projects.
          </p>
          <p>
            Due to not having a home network that I can open ports on, I started learning how to utilize Google Cloud for
            hosting my projects. I learned how to use Google Cloud Functions and Google Cloud Run along side automatic build
            tools like Github Actions and Google Cloud Build.
          </p>
          <p>
            Preact is a smaller version of React that's faster and lighter. I've been using Preact alongside the Fresh framework
            for all of my projects that have a user interface. I made a package for Preact for Dota 2 and Steam
            that allows for easy integration of the Steam Web API and Dota 2 Web API into Preact applications.
          </p>
          <p>
            I recently started to learn Rust and got a handle on a lot of the concepts and started making a project with it.
            I'm currently working on an event sourced graph database. An application like that really utilizes Rust's strengths.
          </p>
        </div>
        <hr />
        <div class="children:(pb-3 text-2xl font-thin text-left) children:first:(text-5xl font-bold text-left)">
          <h1 id="languages">Languages and Technologies</h1>
          <div class="grid grid-cols-4">
            <ul>
              <li>Typescript</li>
              <li>Node.js</li>
              <li>Deno</li>
              <li>React</li>
              <li>Preact</li>
              <li>HTTP / HTTPS</li>
            </ul>
            <ul>
              <li>Express</li>
              <li>Google Cloud</li>
              <li>Bash</li>
              <li>Git</li>
              <li>HTML</li>
              <li>JSON</li>
            </ul>
            <ul>
              <li>CSS</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Protobufs</li>
            </ul>
            <ul>
              <li>GraphQL</li>
              <li>Websockets</li>
              <li>Rust</li>
              <li>PHP</li>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="children:(pb-3 text-2xl font-thin text-left) children:first:(text-5xl font-bold text-left)">
          <h1 id="projects">Projects</h1>
          <p>
            I've made a lot of small projects, half finished things, and things that I've never published. Here's a few of the ones I'm most proud of.
          </p>
          <ul>
            <li class="children:(pb-3)">
              <h1 class="text-4xl font-bold">Steamy</h1>
              <p>
                Steam is a library for interacting with the Steam Web API. It was originally written in Javascript but has since been rewritten in Typescript.
                It supports most of the non-game specific endpoints of the Steam Web API. It's available on <a class="font-light text-blue-800" href="https://github.com/ybabts/Steam">Github </a>
                and <a class="font-light text-blue-800" href="https://deno.land/x/valve@v0.05a">deno.land/x</a>. I really don't like NPM and it's not very compatible with
                Deno because of the way developers expose elements of their package. Also you don't have to pay to publish a package on <a class="font-light text-blue-800" href="https://deno.land/x">deno.land/x</a>.
                Steamy also supports Steam identifier conversion and normalization, so you can convert between Steam IDs, Steam 64 IDs, and Steam 32 IDs.
              </p>
            </li>
            <li class="children:(pb-3)">
              <h1 class="text-4xl font-bold">Winreg</h1>
              <p>
                Winreg is a simple package that allows for easy interaction with the Windows Registry. It's available on <a class="font-light text-blue-800" href="https://github.com/ybabts/winreg">Github </a>
                of course and also available on <a class="font-light text-blue-800" href="https://deno.land/x/winreg">deno.land/x</a>. It's a very simple package that
                uses Deno's execute to run the <code>REG</code> command and parse the output. It's not very fast and doesn't support spaces in the key path, but it's very simple and easy to use.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
