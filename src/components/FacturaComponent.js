import React, {Component} from "react";
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
        return(
            <div className="col-12 col-md-9">
                <h1>Pagina de mesas</h1>
                <Card className="bg-card">
                    <CardBody>
                        <CardTitle>
                            <h3>Añadir a la factura</h3>
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
                                        <Input className="card-inputs" type="button" name="volvermesa"
                                        value="Cancelar"/>
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