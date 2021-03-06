import React, { Component } from 'react';
import Menu from './MenuComponent'
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch, Route , Redirect, withRouter} from 'react-router-dom';
import About from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return{
      dishes : state.dishes,
      comments : state.comments,
      promotions : setImmediate.promotions,
      leaders : state.leaders

    }
}
class Main extends Component{
  constructor(props){
    super(props);

  
  }

render(){

  // method 1 for defining the functional component in router path
  const  Homepage =()=>{
    return(
      <Home 
      dish={this.props.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
  />
    );
  };

  const DishwithId =({match})=>{
    return(
      <DishDetail 
      dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    
    );

  };
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={Homepage} />

        {/* /// method two of defining functional component */}
        <Route exact path="/menu" component={()=> <Menu dishes={ this.props.dishes} />}/>

        <Route path='/menu/:dishId' component={DishwithId}/>

        {/* if no  props is called or send to component then u can just call the component */}

        <Route exact path="/contactus" component={Contact}/>

        <Route path="/about" component ={()=><About leader={this.props.leaders}/>}/>

        <Redirect to="/home"/>
      </Switch>
     
     <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
