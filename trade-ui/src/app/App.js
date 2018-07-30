import React from 'react';
import {render} from 'react-dom';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TabsComponent from './components/TabsComponent';

 export default class App extends React.Component{
    render(){
        return(
            <div>
                <AppBar
                    title="Metallica"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Divider/>
                <TabsComponent/>
                <Divider/>
            </div>
        )
    }
}