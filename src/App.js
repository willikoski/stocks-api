import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Dashboard from './pages/Dashboard/Dashboard'
import Stock from './pages/Stocks/Stocks'
import About from './pages/About/About'
import Nav from './components/Nav'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>      
                <Route path="/about" element={<About/>}/>      
                <Route path="/stocks" element={<Dashboard/>}/>      
                <Route path="/stocks/:symbol" element={<Stock/>}/>                                                
            </Routes>
        </div>
    )
}