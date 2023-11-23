import React,{useEffect,useState    } from "react";
import {Card, CardTitle, CardBody, CardImg, Button} from 'reactstrap';
import { Link } from "react-router-dom";

function RenderMesas({mesa}){
    const [renderTiempo, setRenderTiempo] = useState(0);
    useEffect(() => {
        let interval;
    
        if (mesa.timeRunning) {
          interval = setInterval(() => {
            mesa.tiempo +=1;
            setRenderTiempo (mesa.tiempo);
          }, 1000); // Update time every second (1000ms)
        } else {
          clearInterval(interval);
        } 
        return () => clearInterval(interval); // Clean up interval on unmount or state change
    }, [mesa.timeRunning]);

    return(
        <Card className="bg-card card-margen">
            <CardImg top width="100%" src={mesa.imagen}/>
            <CardBody>
                <CardTitle>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Mesa {mesa.id +1}</h3>
                            </div>
                            <div className="col-md-6">
                                <h3>{mesa.tiempo}</h3>
                            </div>
                        </div>
                    </div>
                </CardTitle>
                {/* Habilita los botones de factura unicamente si hay algo para cobrar (si mesa.factura=true)*/}
                {mesa.factura && ( <Link to={`/mesas/${mesa.id +1}/factura`}>
                                        <Button disabled={!mesa.factura}
                                                size="lg" className="card-inputs">
                                            Ver Factura
                                        </Button>
                                    </Link>)
                }
                {!mesa.factura && ( <Button disabled={!mesa.factura}
                                            size="lg" className="card-inputs">
                                        Libre
                                    </Button>)
                }
                {' '}
                <Link to={`/mesas/${mesa.id +1}`}>                    
                    <Button size="lg" className="other-card-inputs">Ver Mesa</Button>
                </Link>
            </CardBody>
        </Card>
    );
}
const Home = (props)=>{    
    //Recorre todas las mesas y a cada una le crea un componente <RendeMesas/>
    const mesas= props.mesas.map((mesa)=>{
        return(
            <div key={mesa.id} className="col-11 col-md-4 ">
                <RenderMesas mesa={mesa}/>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                {mesas}
            </div>
        </div>
    );
};

export default Home;