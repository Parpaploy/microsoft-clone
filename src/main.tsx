import { createRoot } from "react-dom/client";
import "./index.css";
import StrictHandler from "./layouts/strict.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PcLayout from "./layouts/pc-layout/pc-layout.tsx";
import PcHomePage from "./pages/pc-pages/pc-homepage.tsx";
import MobileLayout from "./layouts/mobile-layout/mobile-layout.tsx";
import MobileHomePage from "./pages/mobile-pages/mobile-homepage.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App mobile={<MobileLayout />} pc={<PcLayout />} />,
    children: [
      {
        path: "",
        element: <App mobile={<MobileHomePage />} pc={<PcHomePage />} />,
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
