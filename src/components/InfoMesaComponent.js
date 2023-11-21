import React from "react";
import { Input } from "reactstrap";

const InfoMesa =(props)=>{
    const Prueba = ()=>{
        return(
            <div className="container">
                Mesa #{props.mesa.id +1}
            </div>
        );
    };    

    return(
        <div className="container bg-card">
            <div className="row">
                {/* Mitad de la izquierda (botones titulo)*/}
                <div className="col-md-6 ">
                    <h2>{<Prueba/>}</h2>
                    <div className="row">
                        <div className=" col-10 m-3">
                            <Input className="card-inputs" type="button" value="Iniciar Tiempo" placeholder="Start Time"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 m-3">
                            <Input className="card-inputs" type="button" value="Terminar Tiempo" placeholder="End Time"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 m-3">
                            <Input className="card-inputs" type="button" value="Añadir Consumo" placeholder="End Time"/>
                        </div>
                    </div>

                </div>
                {/* Midad de la derecha (tiempo y subtotal de factura) */}
                <div className="col-md-6 other-card-inputs">
                    Tiempo
                </div>
            </div>
            sdf

        </div>
    );

}

export default InfoMesa;

