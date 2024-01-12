
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Docs from './components/Docs';
import {  database } from './firebaseConfig';
import DocsEdit from './components/DocsEdit';

function App() {
  return (
    
   <Routes> <Route path="/" element={<Docs database={database} />} />
<Route path="/" element={<Docs database={database} />} />
      <Route path='/docsEdit/:id' element={<DocsEdit database={database} />}></Route>
    </Routes>
  )
}

export default App;