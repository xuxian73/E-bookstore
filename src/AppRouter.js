import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from "./util/history";
import BookView from './view/BookView'
import OrderView from './view/OrderView'
import CartView from './view/CartView'
import UserManage from './view/UserManage'
import BookManage from './view/BookManage'
import OrderManage from './view/OrderManage'
import DetailView from './view/DetailView'
import LoginView from './view/LoginView'
import ProfileView from './view/ProfileView'
import AnalysisView from "./view/AnalysisView";
import { Carousel } from 'antd';

class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LoginView} />
                    <Route exact path="/book" component={BookView}/>
                    <Route exact path="/order" component={OrderView}/>
                    <Route exact path="/cart" component={CartView}/>
                    <Route exact path="/detail" component={DetailView}/>
                    <Route exact path="/profile" component={ProfileView}/>
                    <Route exact path="/usermanage" component={UserManage}/>
                    <Route exact path="/bookmanage" component={BookManage}/>
                    <Route exact path="/ordermanage" component={OrderManage}/>
                    <Route export path='/analysis' component={AnalysisView}/>
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;