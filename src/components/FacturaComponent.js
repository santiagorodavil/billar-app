import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Card, CardBody, cardText,Form, FormGroup, Label, Input, Col, CardTitle} from 'reactstrap';

class Factura extends Component{
    constructor(props){
        super(props);
        this.state={
            cantidad:0
        };
        this.cambiarCantidad = this.cambiarCantidad.bind(this);
    }
    cambiarCantidad(event){
        const target = event.target;
        const name = target.name;
        console.log(name)
        var cant;
        if(name==='lessproduct')
            cant = this.state.cantidad - 1;
        else if (name==='moreproduct')
            cant = this.state.cantidad + 1;

        if(cant<0)
            cant=0;
        this.setState({cantidad: cant})
    }
    render(){
        console.log(this.props.mesa);
        return(
            <div className="col-12 col-md-9 card-margen">
                <Card className="bg-card">
                    <CardBody>
                        <CardTitle>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 other-card-inputs2">                                        
                                        <h3>Añadir a la factura</h3>
                                    </div>
                                    <div className="col-md-7 centered">
                                        <h3>Mesa #{this.props.mesa.id+1}</h3>
                                    </div>
                                </div>
                            </div>
                        </CardTitle>
                            <Form>
                                <FormGroup row>
                                    <Col md={{size:1, offset: 1}}>                                
                                        <Label htmlFor="producto">Producto</Label>
                                    </Col>
                                    <Col md={{size:2, offset:1}}>
                                        <Input className="card-inputs" type="select" name="producto">
                                            <option>Agua</option>
                                            <option>Pola</option>
                                        </Input>
                                    </Col>
                                    <Col md={{size:1, offset:1}}>
                                        <Label htmlFor="cantidad">Cantidad</Label>
                                    </Col>
                                    <Col md={{size:1}}>
                                        <Input className="card-inputs" type="button" name="lessproduct"
                                            value="-" onClick={this.cambiarCantidad}/>
                                    </Col>
                                    <Col md={{size:1}}>
                                        <Input className="card-inputs" type="text" readOnly value={''+this.state.cantidad}/>
                                    </Col>
                                    <Col md={{size:1}}>
                                        <Input className="card-inputs" type="button" name="moreproduct"
                                            value="+" onClick={this.cambiarCantidad}/>
                                    </Col>
                                </FormGroup>   
                                <FormGroup row>
                                    <Col md={{size:3, offset:2}}>
                                        <Link to={`/mesas/${this.props.mesa.id+1}`} className="link-sin-linea">
                                        <Input className="card-inputs" type="button" name="volvermesa"
                                        value="Cancelar"/>
                                        </Link>

                                    </Col>                
                                    <Col md={{size:3, offset:2}}>
                                        <Input className="card-inputs" type="button" name="cobrar"
                                        value="Añadir"/>                                    
                                    </Col>                                                        
                                </FormGroup>                 
                            </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Factura;