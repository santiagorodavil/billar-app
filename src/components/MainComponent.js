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
            mesas:MESAS,
            interval:null
        }
        this.StartStopTiempo = this.StartStopTiempo.bind(this);
    }

    componentDidUpdate(){
        function checkTime(mesaAct){
            if(mesaAct.timeRunning){
                //console.log("siiiiu");                 
            }
        }
        const mesa = this.state.mesas.map((mesa)=>{
            if(mesa.timeRunning){
                return(
                    checkTime(mesa)
                );
            }
            
        });
        return(mesa);
    }


    //Funcion que cambia el estado del valor de los segundos de una mesa
    StartStopTiempo(idMesa, tiempo){
            const newState = this.state.mesas.map(mesa=>{
                if(mesa.id === idMesa){
                    return{...mesa, tiempo:tiempo};
                }
                return mesa;
            });
            this.setState({mesas:newState});
    }

    render(){
        const MesaIdConsumo =()=>{
            const location = useParams();
            return(
                <Factura mesa={this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId)))[0]}/>
            )
        }
        const MesaConId = ()=>{
            const location = useParams();
            //console.log(location);
            /*var a = this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId)))[0];
            console.log(a.id +"***")*/


            //Se le pasa por parametro la mesa que tiene el mismo id del boton clickeado
            return(
                <InfoMesa mesa={this.state.mesas.filter((mesa)=> (mesa.id+1 === parseInt(location.mesaId)))[0]}
                          setTime={this.StartStopTiempo}/>
            )
        }
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/home" Component={()=> <Home mesas={this.state.mesas}/>}/>
                    <Route path="/mesas" Component={()=> <Home mesas={this.state.mesas}/>}/>
                    <Route path="/mesas/:mesaId" Component={MesaConId}/>
                    <Route path="/mesas/:mesaId/consumo" Component={MesaIdConsumo}/>
                    <Route path='/' element={<Navigate to="/home" replace/>} />
                </Routes>
            </div>
        );
    }
}

export default Main;


//Para cuando se tenga el servidor usar: ComponentDidMount (Se llama solo una vez)