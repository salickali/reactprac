import React, {Component} from 'react';
import {Navbar, NavbarBrand,Button, ModalHeader, Modal, ModalBody,Form,  Nav, NavbarToggler, Collapse, NavItem, Jumbotron, FormGroup, Label, Input} from 'reactstrap';
import { NavLink}  from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        // this.toggleNav = this.toggleNav.bind(this);
        this.state ={
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        // to make this method avaible to whole class
        // it specifies that it this method is available
      
    }

    toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
        event.prerventDefault();

    }

    render(){
        return(
            <div>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/" ><img src="assets/images/logo.png" height="30" width="40" alt="fasaha"/></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                     <Nav navbar>
                        <NavItem>
                            <NavLink className="nav=link" to="/home">
                                <span className="fa fa-home"> </span>
                                Home
                            </NavLink>

                            <NavLink className="nav=link" to="/about">
                                <span className="fa fa-info "> </span>
                                AboutUs
                            </NavLink>
                            
                            <NavLink className="nav=link" to="/menu">
                                <i className="fa fa-list "></i>
                                Menu
                            </NavLink>

                            <NavLink className="nav=link" to="/contactus">
                                <span className="fa fa-address-card ">   </span>
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in"/>Login</Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Salick Ali</h1>
                                <p>Hey I am web developer working as freelancer</p>
                            </div>
                        </div>

                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

export default  Header;