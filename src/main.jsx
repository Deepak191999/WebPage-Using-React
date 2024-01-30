import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// or created with 2nd type
const router= createBrowserRouter(
  createRoutesFromElements
  (<Route path= "/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    {/* <Route path="user/:userid" element={<User/>}/> */}
    {/* loader isliye use hota hai taki hum data jldi fetch krle,jaise hi hum nav me jo github hai uspr cursor lekt jayenge, vase hi vo github ki (jo humne di hui hai)api fetch krlega or usko cache memory me rkh lega taki jldi hit ho api,loading km ho */}
    <Route  loader={githubInfoLoader}   // 
     path="github" element={<Github/>}/>
  </Route>)
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
