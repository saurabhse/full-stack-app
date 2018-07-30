import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 10,
      marginRight: 10,
      width: 200,
    },
    dropdown:{
        width: 150,
        margin:10
    },
    menu: {
      width: 200,
    },
    floatingLabelStyle: {
        color: '#00bcd4',
      },
    floatingLabelFocusStyle: {
        color: '#00bcd4',
      },
  };
export default class SearchTradeComponent extends React.Component {
    render(){
        
        return (
            <form style={styles.container} noValidate autoComplete="off">
            <DatePicker style={styles.dropdown} floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Trade Date From" container="inline" mode="landscape" />
            <DatePicker style={styles.dropdown} floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Trade Date To" container="inline" mode="landscape" />
        <SelectField style={styles.dropdown}
          floatingLabelText="             "
          floatingLabelStyle={{color: 'red'}}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <div style={{float:'bottom'}}>
        <Checkbox
          label="Buy"
          
        />
        </div>
        <div>
        <Checkbox
          label="Sell"
          
        /></div>
        <SelectField style={styles.dropdown}
          floatingLabelText="             "
          floatingLabelStyle={{color: 'red'}}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <SelectField style={styles.dropdown}
          floatingLabelText="               "
          floatingLabelStyle={{color: 'red'}}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <div>
        <RaisedButton label="Clear" primary={true} style={{margin:12}} />
        <RaisedButton label="Save" primary={true} style={{margin:12}}/>
        </div>
        
        </form>
        )
    }
}