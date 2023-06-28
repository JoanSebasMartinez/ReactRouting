
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarBrigadista from './componentes/AgregarBrigadista';
import ListaBrigadistas from './componentes/ListaBrigadistas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/brigadista/new' element={<AgregarBrigadista/>}></Route>
        <Route path='/brigadista' element={<ListaBrigadistas/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
