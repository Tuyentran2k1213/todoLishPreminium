import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Body, Detail, InputTask, Navbar, Login, Signup, ForgetPass } from './Component';

export default function Todo() {
    return (
       <>
       <div className='h-auto w-1/2 mx-auto p-10 bg-slate-400 mt-6'>
           <Header/>
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/todoLishPreminium'>
            <InputTask/>
            <Body/>
                </Route>
                
            <Route path='/todoLishPreminium/detail/:id'>
            <InputTask/>
                <Detail/>                
            </Route>
            <Route path='/todoLishPreminium/login'>
                <Login/>
            </Route>
            <Route path='/todoLishPreminium/signup'>
                <Signup/>
            </Route>
            <Route path='/todoLishPreminium/forget'>
                <ForgetPass/>
            </Route>
        </Switch>
        </BrowserRouter>
       </div>
       </>
    )
}