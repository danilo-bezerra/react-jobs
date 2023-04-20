import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { JobPage } from "../pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="job/:id" element={<JobPage />} />
    </Route>
  )
);

export function Routes() {
  return <RouterProvider router={router} />;
}
