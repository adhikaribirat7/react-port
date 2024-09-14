import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Hero from "./components/Hero.jsx";
// import AboutMe from "./components/AboutMe.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Hero/>} />
//       <Route path="about" element={<AboutMe />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
