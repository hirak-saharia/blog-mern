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
  > tailwind.config.js - replace the content >>>
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
