import React,{useState} from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const InfoMesa =(props)=>{
    const [relojActivo, setRelojActivo] = useState(false);
    const Prueba = ()=>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Mesa #{props.mesa.id +1}</h2> 
                    </div>
                    <div className="col-md-4 h3-info-mesa">
                        {props.mesa.tipo}
                    </div>
                </div>
                
            </div>
        );
    };    

    const StartStopClock =()=>{
        setRelojActivo(!relojActivo);
        props.mesa.factura=true;
    };

    const HandleFaturar = ()=>{
        if(props.mesa.factura){
            props.mesa.factura=false;
            if(relojActivo) setRelojActivo(!relojActivo);
            alert("Se ha facturado su compra!");
        }
    };

    return(
        <div className="container bg-card">
            <div className="row">
                {/* Mitad de la izquierda (botones y encabezado)*/}
                <div className="col-md-6 ">
                    {<Prueba/>}
                    <div className="row">
                        <div className=" col-10 m-3">
                            <Input className="card-inputs" type="button" onClick={StartStopClock}
                                   value={relojActivo ? 'Terminar Tiempo': 'Iniciar Tiempo'}placeholder="Start Time"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 m-3">
                            <Link to={`/mesas/${props.mesa.id+1}/consumo`} className="link-sin-linea">
                                <Input className="card-inputs" type="button" value="Añadir Consumo" placeholder="End Time"/>
                            </Link>
                        </div>
                    </div>

                </div>
                {/* Midad de la derecha (tiempo y subtotal de factura) */}
                <div className="col-md-6 other-card-inputs">
                    Tiempo
                </div>
            </div>
            <div className="row">
                <div className="col-9 m-3">
                    <Link to={"/home"}>
                        <Button className="other-card-inputs" size="lg">Volver</Button>
                    </Link>
                </div>
                <div className=" text-right col-2 m-3">
                    <Button className="card-inputs" size="lg" onClick={HandleFaturar}>Facturar</Button>
                </div>
            </div>

        </div>
    );

}

export default InfoMesa;

