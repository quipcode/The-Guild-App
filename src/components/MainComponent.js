import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent'
import MyGuilds from './MyGuildsComponent'
import Bio from './BioComponent'
import Header from './HeaderComponent'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const HomePage = () => {
            return (
                <Home/>
            )
        }

        const MyGuildsPage = () =>{
            return(
                <MyGuilds/>
            )
        }

        const BioPage = () =>{
            return (
                <Bio/>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='./home' component={HomePage}/>
                    <Route path='./bio' component={BioPage}/>
                    <Route path='./myguilds' component={MyGuildsPage}/>
                </Switch>
            </div>
        )
    }
}

export default Main;