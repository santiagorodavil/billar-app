import React from "react";
import {Card, CardTitle, CardBody, CardImg, CardText} from 'reactstrap';

function RenderMesas({mesa}){
    return(
        <Card>
            <CardImg top width="100%" src={mesa.imagen}/>
            <CardBody>
                <CardTitle>Mesa {mesa.id +1}</CardTitle>
                <CardText>{mesa.tipo}</CardText>
            </CardBody>
        </Card>
    );
}
const Home = (props)=>{
    console.log(props);
    const mesas= props.mesas.map((mesa)=>{
        return(
            <div key={mesa.id} className="col-9 col-md-3 m-2">
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