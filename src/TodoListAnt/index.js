import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Body, Detail, InputTask, Navbar, Login, Signup } from './Component';

export default function Todo() {
    return (
       <>
       <div className='h-auto w-1/2 mx-auto p-10 bg-slate-400 mt-6'>
           <Header/>
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
            <InputTask/>
            <Body/>
                </Route>
                
            <Route path='/detail/:id'>
            <InputTask/>
                <Detail/>                
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/signup'>
                <Signup/>
            </Route>
        </Switch>
        </BrowserRouter>
       </div>
       </>
    )
}