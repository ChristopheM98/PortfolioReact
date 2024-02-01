import {FunctionComponent} from 'react'
import Home from '../pages/Home/Home.tsx'
import CV from '../pages/CV/CV.tsx'
import Ervaring from '../pages/Ervaring/Ervaring.tsx'
import Contact from '../pages/Contact/Contact.tsx'
import PageNotFound from '../pages/PageNotFound/PageNotFound.tsx'
import {Route, Routes} from 'react-router-dom'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/CV'} element={<CV/>}/>
            <Route path={'/Ervaring'} element={<Ervaring/>}/>
            <Route path={'/Contact'} element={<Contact/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing