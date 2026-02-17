import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import NotesPage from "../pages/notes/NotesPage";
import Form from "../pages/formPage/FormPage";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'notes',
            element:<NotesPage/>
        }
            
        ]
    }    
]);
export default Routes;