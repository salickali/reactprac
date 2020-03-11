import React, { Component } from 'react';
import Menu from './MenuComponent'
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch, Route , Redirect} from 'react-router-dom';
import About from './AboutComponent';


class Main extends Component{
  constructor(props){
    super(props);

    this.state ={
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      // selectedDish : null
    };
  }
  // onDishSelect(dishId){
  //   this.setState({selectedDish: dishId});
  // }
 
  

render(){

  /// method 1 for defining the functional component in router path
  const  Homepage =()=>{
    return(
      <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}     
      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  }

  const DishwithId =({match})=>{
    return(
      <DishDetail dish={this.state.dishes.filter((dish)=> dish.dishId === parseInt(match.params.dishId,10))}
       comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}></DishDetail>
    );

  };
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={Homepage}/>

        {/* /// method two of defining functional component */}
        <Route exact path="/menu" component={()=> <Menu dishes={ this.state.dishes} />}/>

        <Route path='/menu/:dishId' component={DishwithId}/>

        {/* if no  props is called or send to component then u can just call the component */}

        <Route exact path="/contactus" component={Contact}/>

        <Route path="/about" component ={()=><About leader={this.state.leaders}/>}/>

        <Redirect to="/home"/>
      </Switch>
     
     <Footer/>
    </div>
  );
}
}

export default Main;
