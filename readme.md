\*Installing React.js and Tailwind CSS and careate the first template

> Run the following command
> : npm create vite@latest >> prject name - client
> Created a client folder
> Now run:
> cd client  
> npm install
> npm run dev

- Install Tailwind CSS
  > npm install -D tailwindcss postcss autoprefixer
  > npx tailwindcss init -p
  > tailwind.config.js - replace the content >>> Configure your template paths
  > Go to index.css at src folder > replace all the default codes with the below lines of code from tailwind:
  > @tailwind base;
  > @tailwind components;
  > @tailwind utilities;

> delete unncessary files > App.css, svg from assets

> Run the app >> npm run dev
> Clean up the deafult code from App.jsx and write your own script
> React functional component > rfce > get the boiler palate
> Install extension >Multiple cursor case preserve
> app will running at localhost server:5173
> Now test tailwindcss by writing class >> <h1 className="text-3xl text-red-500">app</h1>;

-------------------------------------============
\*\* Step- Initialize a github repository to the app

- the repository should be created in the root directory not inside of the client side
- go back from the client folder
- set the repo under the > MERN Blog Full Stack folder only
- git init
- git add .
- go github account > create a new repository
- git remote add origin https://github.com/hirak-saharia/blog-with-mern-stack.git
- git branch -M main
- git push -u origin main
  \*\*\* ignore any specific files to github
- mentioned the file at .gitignore
- git status
- git add .
- git commit -m ""
- git push
- git status >> deleted file
- git rm cached --readme.md > it will remove only cache not data
- git commit -m "removed the file"
- git push
- done

----------------------------------------=====

**\*\*** Step- Create pages and routed

- pages like > Home, About, Projects, Sign in, Sign Up
- First need to create primary pages - Sign in and Sign Up
- Go to client > src > create a folder call > pages
- In pages > create a files :
  About.jsx
  SignIn.jsx
  SignUp.jsx
  Dashboard.jsx
  Home.jsx
  Projects.jsx
  - type rfce for all the jsx pages to get react function components template
  - In order to see these pages http://127.0.0.1:5173/About, we need to first ---
  - Go to client folder >> cd Client
  - npm run dev
  - which will show the pages as app that is coming from App.jsx
- To show the pages in the URL we need to install another package call react dom

  - oprn another terminal
  - go inside the client folder
  - npm i react-router-dom
  - go to App.jsx
  - import the browser router as > import { BrowserRouter, Routes, Route } from 'react-router-dom'
  - Now we need to import instead of returning h1 ellement > <h1 className="text-3xl text-red-500">app</h1> and put all the pages inside the below:
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/sign-in" element={<SignIn />} />
    <Route exact path="/sign-up" element={<SignIn />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route exact path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  - And also // import the components from their files
    import Home from "./pages/Home";
    import About from "./pages/About";
    import SignIn from "./pages/SignIn";
    import SignUp from "./pages/SignUp";
    import Dashboard from "./pages/Dashboard";
    import Projects from "./pages/Projects";
  - Test the routes > go to browser > http://127.0.0.1:5173/about

--------------================================== --------------------
**\*\*** Step- Create Header components

- first create a component > create a folder call > component inside at src
- Inside component > create a files > Header.jsx
- Then type rfc for now in Header.jsx
- Add it inside the App.jsx > import the <Header /> outside of the <BrowserRouter>
- We can see the Header everywhere with the pages such as about, home, etc.
- Now designing the Header like Sign In buttons etc, we will use library call Flowbite React > https://www.flowbite-react.com/docs/components/button instead of adding lots of tailwind classes for css and this is a customizable also
- So just need to import buttons from Flowbite and change the coloe
- Its working for the dark mode as well - Toggle mode for light/dark
  - For installation go to Getting started
  - Click on Quickstart > Install Flowbite React [Note- install inside client side]
  - Run the following command to install flowbite-react: npm i flowbite-react
  - Add the Flowbite plugin to tailwind.config.js, and include content from flowbite-react: 'node\*modules/flowbite-react/lib/esm/\*\*/\_.js',
  - And for the plugins add : require('flowbite/plugin') and paste it inside plugins: []
  - Once installation done, restart the package changes
  - then run > npm run dev
  - Now check the package.json > to check if the "flowbite-react": "^0.7.2" is showing or not
  - If yes run the app again
- What we gonna implmenet at Header.jsx

  - First add a Navar where we want to cover everything which is coming from Flowbite by react
  - import { Navbar } from "flowbite-react"; at Header.jsx
  - when typing <Navbar> it give a flowbite suggestion it means installed correctly - but sometimes it wont show suggestions
  - To test > see the output in the browser if Header changes > if yes then it works fine
    -- Now lets add a border and seperate the header className in the Navbar

    - Create a logo > Logo has two part > Name and Word Blog
    - Seperated it by using a <span>
    - Now when click on the button > go the homepage that we need to add a link tag so
    - import link tag at Header.jsx > import { Link } from "react-router-dom"; >> when we click on something, we go to that page but without refrshing the page
    -- below are the codes for Blog Logo implementation
    <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Saharia Zone
        </span>
        Blog
    </Link>

  -- Implement search button or search input --

  - Sumit a <form> and just make a search request
  - for react icon > install >>npm i react-icons
  - And the top we need to import >> import { AiOutlineSearch } from "react-icons/ai";
  - Make the search icon hidden by adding a className='hidden' but in large screen make it visible >> lg:inline
  - Instead of this in the small screen > make a button for that
  - So the <form> add a button which is coming from flowbite react and add the icon here as well > <AiOutlineSearch />
    <Button className="w-12 h-10 lg:hidden" color="gray">
    <AiOutlineSearch />
    </Button>
  - hiden the icon as well for small screen and make it visible for the bigger screen
  - Also make the button little bit reounded >> inside the button > add pill in className

-- Implement the Sign In button -- create after the button

- create a <div className> and inside div > another button
- fa Moon inside the icon fa Moon from react icons and import at the top
- import { FaMoon } from "react-icons/fa";
<div className="">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
      </div>
- ## Now link tag that goes for signin page from the Sign In button
  - In sign in link tag, we gonna havea button
  <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
  </Link>
  - Lets bring FaMoon and Sign In next to each other
  - Use display to "felx" and "gap-2" in FaMoon className
    -After adding the Menu For larger screen - keep them to be at the end and For smaller screen- bring them to be at the begining >>>> To do that, medium size: md:order to be 2
    - We dont see the result now but once we add the Menu then it will impact the changes.
- ## Let add the Menu at the end after link tag close

  - Having the dropdown menu - we can Navbar.collapse
  - Inside this > we gonna have NavLink
  - We gonna have active when the path is "/" for the home or about, etc
  - Do the same for About and Projects
  - Implement <Navbar.Collapse> after end of the </div>

  <Navbar.Collapse>
  <Navbar.Link>
    <Link to="/">Home</Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/about">About</Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/projects">Projects</Link>
    </Navbar.Link>
    </Navbar.Collapse>

  - Lets get the Hamburger menu for the Navbars
  - Add the Hamburger after the Sign In button
  - Add just <Navbar.toggle>
  - Now click on the toggle we can see the munu and the Home, About and Projects
  - Also we dont see the toggle for larger screen
  - To active the Menus Navbars we gonna have to know our URL - we need to import another from react-router-dom a hook call called use location
  - import { Form, Link, useLocation } from "react-router-dom";
  - And then we need to initialize it here at the beginin Header()
    export default function Header() {
    const path = useLocation().pathname;
    return ();
    }
  - Then active this <Navbar.Link> based on this path
  - If the active={path === "/"}
  - Do the same thing for About and Projects >> active={path === "/about"} and active={path === "/projects"}
  - Test the changes >> click on the Menu > the color should activate based on the selection and also for the larger screen color stays based on path active

  \*\* Now go to cosole.log and we see error : <a> cannot appear as a descendant of <a> as we two anchor tags like <Navbar.Link> and <Link> are not allowed inside each others

  - So to fix this issue, change this link and make it as <'div'>
    <Navbar.Link active={path === "/about"} as={"div"}>
  - do the same thing for About and Projects
  - Now refrsh the page and we are not getting any error.
  - Push all the code to github

----=====================================-----------------------------
