
import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import AgregarBrigadista from './componentes/AgregarBrigadista';
import ListaBrigadistas from './componentes/ListaBrigadistas';
import InfoBrigadista from './componentes/InfoBrigadista';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new' element={<AgregarBrigadista/>}></Route>
        <Route path='/' element={<ListaBrigadistas/>}></Route>
        <Route path='/:id' element={<InfoBrigadista></InfoBrigadista>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
