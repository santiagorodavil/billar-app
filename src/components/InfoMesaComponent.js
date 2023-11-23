import React,{useEffect,useState} from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
/* TODO: mirar que el tiempo continue aumentando fuera de esta página, Agregar factura sub total */
const InfoMesa =(props)=>{

    const [relojActivo, setRelojActivo] = useState(props.mesa.timeRunning);
    const [renderTiempo, setRenderTiempo] = useState(0);
    /* - Revisar que el tiempo siga moviendose incluso fuera de esta pagina (ver el componentDidupdate() dentro del Main)
    ---
       - Otra opcion es ver si se puede manejar desde useEffect pero en Home Component (creo que es mucho mejor)
       Esta implementacion tiene bugs. Cuando se entra a otra mesa o a  cualquier factura, el tiempo se detiene
    ---
       */
    useEffect(() => {
        let interval;
    
        if (props.mesa.timeRunning) {
          interval = setInterval(() => {
            props.mesa.tiempo +=1;
            setRenderTiempo (props.mesa.tiempo);
          }, 1000); // Update time every second (1000ms)
        } else {
          clearInterval(interval);
        } 
        return () => clearInterval(interval); // Clean up interval on unmount or state change
    }, [props.mesa.timeRunning]);

    const HeaderTable = ()=>{
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

    const handleStartStopClock =()=>{
        var relojAct = props.mesa.timeRunning;
        props.mesa.timeRunning = !relojAct;
        if(props.mesa.timeRunning) props.mesa.factura=true;
        setRelojActivo(props.mesa.timeRunning);
    };

    const handleFaturar = ()=>{
        if(props.mesa.factura){
            props.mesa.factura=false;
            props.mesa.timeRunning=false;
            props.mesa.tiempo=0;
            if(relojActivo) setRelojActivo(!relojActivo);
            alert("Se ha facturado su compra!");
        }
    };

    return(
        <div className="container bg-card card-margen">
            <div className="row">
                {/* Mitad de la izquierda (botones y encabezado)*/}
                <div className="col-md-6 ">
                    {<HeaderTable/>}
                    <div className="row">
                        <div className=" col-10 m-3">
                            <Input className="card-inputs" type="button" onClick={handleStartStopClock}
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
                <div className="col-md-6 card-inputs">
                    <h2>Tiempo: {props.mesa.tiempo}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9 m-3">
                    <Link to={"/home"}>
                        <Button className="other-card-inputs" size="lg">Volver</Button>
                    </Link>
                </div>
                <div className=" text-right col-2 m-3">
                    <Button className="card-inputs" size="lg" onClick={handleFaturar}>Facturar</Button>
                </div>
            </div>

        </div>
    );
}

export default InfoMesa;

