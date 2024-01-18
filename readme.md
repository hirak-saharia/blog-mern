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
