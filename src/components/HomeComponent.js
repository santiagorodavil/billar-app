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
                {mesa.factura && ( <Link to={`/mesa${mesa.id +1}/factura`}>
                                        <Button disabled={!mesa.factura}
                                                size="lg" className="card-inputs">
                                            Facturar
                                        </Button>
                                    </Link>)
                }
                {!mesa.factura && ( <Button disabled={!mesa.factura}
                                            size="lg" className="card-inputs">
                                        disable
                                    </Button>)
                }

                <Link to={`/mesa${mesa.id +1}`}>                    
                    <Button size="lg" className="other-card-inputs">Ver Mesa</Button>
                </Link>
            </CardBody>
        </Card>
    );
}
const Home = (props)=>{
    const mesas= props.mesas.map((mesa)=>{
        return(
            <div key={mesa.id} className="col-11 col-md-3 m-4">
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