import React, { Component } from 'react';
import {Card, CardImg ,Button,  Breadcrumb, Row, Col, ModalHeader, Modal, ModalBody,Form, FormGroup, Label,Input, BreadcrumbItem, CardText, CardBody,CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control , LocalForm, Errors} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class CommentForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){
        return(
            
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"/>&nbsp;&nbsp;  Submit Comments</Button>
                        </div>  
                    </div>
                    
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Author Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Author Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Ratings</Label>
                                <Col md={12}>
                                    <Control.input  model=".rating" id="rating" name="rating"
                                        className="form-control"
                                        type="number"
                                        
                                        validators={{
                                            required, 
                                        }}
                                         />
                                       
                                       

                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Enter your Comment"
                                        className="form-control"
                                        rows={6}
                                        validators={{
                                            required, minLength: minLength(10), maxLength: maxLength(150)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 10 characters',
                                            maxLength: 'Must be 150 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:12}}>
                                    <Button type="submit" color="primary">
                                   Post Comment
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                            </ModalBody>
                            </Modal>
                   
                </div>
        );
    }

}
function RenderDish({dish}){
    return(
       
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
}

function RenderComments({comments}){
    if(comments !=null)
    return(
        <div className="col-12 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
           { comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        })}
            </ul>
        </div>

    );
    else
        return(<div></div>);
}

const DishDetail = (props) =>{
    if(props.dish != null)
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <CommentForm/>
                </div>
            </div>
            </div>
        );
    }

export default DishDetail;