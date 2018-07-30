import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {fullWhite} from 'material-ui/styles/colors'; 

export default class ViewTradeComponent extends React.Component{
    render(){
        return(
            <div>
            <Toolbar style={{backgroundColor:'#00bcd4'}}>
                <ToolbarGroup firstChild={true}>
                <ToolbarTitle style = {{color:fullWhite}} text="Trade Id :" />
                </ToolbarGroup>
                <ToolbarGroup>
                <IconButton>
                    <EditIcon color={fullWhite}/>
                    </IconButton>
                <IconButton>
                    <DeleteIcon color={fullWhite}/>
                    </IconButton>
                
                    </ToolbarGroup>
            </Toolbar>
            </div>
        )
    }
}