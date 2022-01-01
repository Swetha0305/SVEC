import React from 'react';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';

export default function Home() {
    return (
        <div>
           <BrowserRouter>
           <Routes>
               <Route path="/home" element={<Main/>}></Route>
               <Route path="/login" element={<ListRendering/>}></Route>
               <Route path="/home" element={<FormRendering/>}></Route>
           </Routes>
           </BrowserRouter> 
           {/* <ListRendering/> */}
           <FormRendering/>
        </div>
    )
}


function Main(){
    return (
        <>
        <h1>
            ::Home Page::
        </h1>
        <Link to="/login">Login</Link>
        
        
        </>
    )
}