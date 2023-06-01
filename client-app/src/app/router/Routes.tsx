import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App></App>,
        children: [
            { path: 'activities', element: <ActivityDashboard></ActivityDashboard> },
            { path: 'activities/:id', element: <ActivityDetails></ActivityDetails> },
            { path: 'createActivity', element: <ActivityForm key='create'></ActivityForm> },
            { path: 'manage/:id', element: <ActivityForm key='manage'></ActivityForm> },
        ]

    }

]
export const router = createBrowserRouter(routes);