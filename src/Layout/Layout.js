import React from 'react';
import Header from "../MainPage/Header/Header";
import MainPage from "../MainPage/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import AuthForm from "../MainPage/AuthForm/AuthForm";
import RegForm from "../MainPage/RegForm/RegForm";


export default function Layout(){
    return(

            // <Route exact path="/" render={() => <MainPage/>}/>

            <BrowserRouter>
                <Route exact path="/" render={() => <MainPage/>}/>
                <Route path="/Aform" render={() => <AuthForm/>}/>
                <Route path="/Rform" render={() => <RegForm/>}/>
            </BrowserRouter>

            // {/*<Route path="/Aform" render={() => <AuthorizationForm/>}/>*/}
            // {/*<Route path="/Fform" render={() => <ForgotForm/>}/>*/}
            // {/*<Route path="/Rform" render={() => <RegistrationForm/>}/>*/}
            // {/*<Route path="/MainPage" render={() => <MainPage/>}/>*/}
            // {/*<Route path="/BMenu" render={() => <BurgerMenu/>}/>*/}
            // {/*<Route path="/CDA" render={() => <Cda/>}/>*/}
            // {/*<Route path="/Legal" render={() => <Legal/>}/>*/}
         )
}
