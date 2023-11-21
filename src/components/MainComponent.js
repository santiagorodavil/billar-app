import React,{ Component }  from "react";
import LoginForm from "./LoginComponent";
import Header from "./HeaderComponent";
import Sidebar from "./SidebarComponent";
import Factura from "./FacturaComponent";
import Home from "./HomeComponent";
import InfoMesa from "./InfoMesaComponent";
import {Routes, Route, Navigate, useParams} from 'react-router-dom';
import {MESAS} from '../shared/mesas';


class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            mesas:MESAS
        }
    }
    render(){
        const MesaConId = ()=>{
            const location = useParams();
            //console.log(location);
            /*var a = this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId)))[0];
            console.log(a.id +"***")*/
            

            //Se le pasa por parametro la mesa que tiene el mismo id del boton clickeado
            return(
                <InfoMesa mesa={this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId)))[0]}/>
            )
            //console.log(this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId))));
        } 
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/home" Component={()=> <Home mesas={this.state.mesas}/>}/>
                    <Route path="/mesas" Component={Factura}/>
                    <Route path="/mesas/:mesaId" Component={MesaConId}/>
                </Routes>
            </div>
        );
    }
}

export default Main;