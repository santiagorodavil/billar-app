import React, {Component} from "react"
import {Nav, NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";

class Sidebar extends Component{
    render(){
        return(
            <>
               <aside className="aside-bar">
                    <Nav vertical>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                Mesas
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                Inventario
                            </NavLink>
                        </NavItem>
                    </Nav>
                </aside> 
            </>
        );
    }
}

export default Sidebar;
