// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the components from their files
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";

// export default function App() {
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// }

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/post/:postSlug" element={<PostPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// export default App;

// <Route path="/about" element={<About />} />
// <Route path="/sign-in" element={<SignIn />} />
// <Route path="/sign-up" element={<SignUp />} />
// <Route path="/dashboard" element={<Dashboard />} />
// <Route path="/projects" element={<Projects />} />
