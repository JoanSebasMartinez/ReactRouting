
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarBrigadista from './componentes/AgregarBrigadista';
import ListaBrigadistas from './componentes/ListaBrigadistas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new' element={<AgregarBrigadista/>}></Route>
        <Route path='/' element={<ListaBrigadistas/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
