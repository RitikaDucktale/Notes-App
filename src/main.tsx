import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router-dom';

import './index.css';
import Routes from './routes/routes';
import { NotesProvider } from './contexts/NotesContext';

createRoot(document.getElementById('root')!).render(
   <NotesProvider>
    <RouterProvider router={Routes}/>
   </NotesProvider>
)
