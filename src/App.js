import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
    unsubscribe = null;

    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        this.unsubscribe = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
