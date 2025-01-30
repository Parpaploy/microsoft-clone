import { createRoot } from "react-dom/client";
import "./index.css";
import StrictHandler from "./layouts/strict.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PcLayout from "./layouts/pc-layout/pc-layout.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App mobile={<></>} pc={<PcLayout />} />,
    children: [
      {
        path: "",
        element: <App mobile={<>MobileHome</>} pc={<>PCHome</>} />,
      },
    ],
  },
  {
    path: "login",
    element: <App mobile={<>MobileLogin</>} pc={<>PCLogin</>} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictHandler>
    <RouterProvider router={router}></RouterProvider>
  </StrictHandler>
);
