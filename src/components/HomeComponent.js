import React from "react";
import {Card, CardTitle, CardBody, CardImg, CardText, Button} from 'reactstrap';
import { Link } from "react-router-dom";

function RenderMesas({mesa}){    
    console.log(mesa.factura);
    return(
        <Card>
            <CardImg top width="100%" src={mesa.imagen}/>
            <CardBody>
                <CardTitle>Mesa {mesa.id +1}</CardTitle>
                <CardText>{mesa.tipo}</CardText>

                <Button disabled={!mesa.factura} color="primary" size="lg">Factura</Button>
                {' '}
                <Button size="lg" type="link" href="/mesas">Ver Mesa</Button>
            </CardBody>
        </Card>
    );
}
const Home = (props)=>{
    const mesas= props.mesas.map((mesa)=>{
        return(
            <div key={mesa.id} className="col-9 col-md-3 m-3">
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