import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
     <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
