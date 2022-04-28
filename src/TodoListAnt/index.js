import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Body, Detail, InputTask, Login, Signup, ForgetPass, Firstpage } from './Component';
import Layout from './Layout';

export default function Todo() {
    return (
      <>
        <BrowserRouter>
        <Routes>
            <Route path='/todoLishPreminium' element={<Firstpage/>} />

            <Route path='/todoLishPreminium/main' element={<>
                <Layout Component={() => (
                    <>
                    <InputTask/>
                    <Body/>
                </>
                )}/>
            </>}/>
                
            <Route path='/todoLishPreminium/detail/:id' element={
                <Layout Component={() => (
                    <>
                <InputTask/>
                <Detail/>
            </>
                )}/>
            } />

            <Route path='/todoLishPreminium/login' element={<Layout Component={Login}/>}/>
            <Route path='/todoLishPreminium/signup' element={<Layout Component={Signup}/>} />
            <Route path='/todoLishPreminium/forget' element={<Layout Component={ForgetPass}/>} />
        </Routes>
        </BrowserRouter>  
    </>
    )
}