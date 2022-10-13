import WindowResizer from './WindowResizer';
import ParentModalWindow from './ModalWindow/ParentModalWindow';
import Counter from './counter/Counter';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App () {
    return (

    <BrowserRouter>

        <nav>
            <ul>
                <li><Link to='resizer'> Go to resizer</Link></li>
                <li><Link to='modal'> Go to modal</Link></li>
                <li><Link to='Counter'> Go to Counter</Link></li>
            
            
            </ul>
        </nav>

    <Routes>
        <Route path='/resizer' element={<WindowResizer/>}/>
        <Route path='/modal' element={<ParentModalWindow/>}/>
        <Route path='/counter' element={<Counter/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
   
    )
}
    
export default App;