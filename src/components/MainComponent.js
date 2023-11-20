import React,{ Component }  from "react";
import LoginForm from "./LoginComponent";
import Header from "./HeaderComponent";
import Sidebar from "./SidebarComponent";
import Tables from "./TablesComponent";
import Home from "./HomeComponent";
import {Routes, Route, Navigate} from 'react-router-dom';
import {MESAS} from '../shared/mesas';


class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            mesas:MESAS
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/home" Component={()=> <Home mesas={this.state.mesas}/>}/>
                    <Route path="/mesas" Component={Tables}/>
                </Routes>
            </div>
        );
    }
}

export default Main;