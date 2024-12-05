import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './component/Body.jsx'
import { BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render
(<BrowserRouter>
    <Body/>
</BrowserRouter>)
