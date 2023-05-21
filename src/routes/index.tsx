import { Routes, Route, HashRouter } from 'react-router-dom';
import Quina from '../pages/Quina';
import Timemania from '../pages/Timemania';
import Megasena from '../pages/Megasena';
import Menu from '../components/Menu/Menu'
import { Erro } from '../components/Carregando/carregando';




function Rota() {
    return (
        <>
            <HashRouter>
                <Menu/>
                <Routes>
                    <Route path='/quina' element={<Quina/>}/>
                    <Route path='/timemania' element={<Timemania/>}/>
                    <Route path='/megasena' element={<Megasena/>}/>
                    <Route path='/' element={<Timemania/>}/>
                    <Route path='*' element={<Erro/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Rota