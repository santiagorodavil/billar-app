import React from "react";
import {Card, CardTitle, CardBody, CardImg, Button} from 'reactstrap';
import { Link } from "react-router-dom";

function RenderMesas({mesa}){
    return(
        <Card className="bg-card">
            <CardImg top width="100%" src={mesa.imagen}/>
            <CardBody>
                <CardTitle>Mesa {mesa.id +1}</CardTitle>
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