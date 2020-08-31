import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
        this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    console.log(snapshot.data());
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    });

                    console.log(this.state);
                });
            } else {
                this.setState({ currentUser: userAuth });
            }
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
