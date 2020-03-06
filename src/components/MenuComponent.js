import React, {Component} from 'react';
import {Card, CardImg , CardImgOverlay , CardText, CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null

        }
        console.log('menu component constructor is invoked');
       
    }

    componentDidMount(){
        console.log('menu component comdidmount is invoked');
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null)
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
        else
            return (
                <div ></div>
            );
    }
    render(){

     
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card  onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                       <CardImgOverlay>
                           <CardTitle>{dish.name}</CardTitle>
                       </CardImgOverlay>  
                    </Card>
                </div>
            );
        });

        //   console.log('menu com render is called');
        return(
       
            <div className="container">
                <div className="row text-center">
                    <h1 className=" col-12 mb-3"> Menu</h1>
                      
                    </div>
                    <div className="row">
                    {menu}
                        <div className="col-12 col-md-5 m-1">
                        <DishDetail dish={this.state.selectedDish}/>
                        {/* {this.renderDish(this.state.selectedDish)} */}
                    </div>
                    </div>
                </div>
            
        );
    }

}


export default Menu;