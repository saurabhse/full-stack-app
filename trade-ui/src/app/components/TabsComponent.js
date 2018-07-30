import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


import TradeListComponent from './TradeListComponent';
import SearchTradeComponent from './SearchTradeComponent';
import ViewTradeComponent from './ViewTradeComponent';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
  };
export default class TabsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Trades" value="a">
          <div>
          <Divider/>
            <Paper style={style} zDepth={2}>
                <SearchTradeComponent/> 
            </Paper>
            <div style={{display: 'flex'}}>
            <Paper style={style} zDepth={2}>
                 <TradeListComponent/>
            </Paper>
            <Paper style={style} zDepth={2}>
                 <ViewTradeComponent/>
            </Paper>
            </div>
          </div>
        </Tab>
        <Tab label="Transfers" value="b">
          <div>
                <p>Transfers tab</p>
          </div>
        </Tab>
        <Tab label="Transports" value="c">
          <div>
                <p>Transports tab</p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}