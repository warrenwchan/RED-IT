import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import {data} from './../../mock-data'

class Week extends Component {
    
    // We pass the category data in and places each Category in a ListItem.
    weekItems(category, i) {
        return( <ListItem primaryText={category} key={i}/> )}

    // This builds each week chunk, contaning the week title and each ListItem built above.
    createWeek(week, i) {
        return(
            <List key={i}>
                <Subheader>{ week.title }</Subheader>
                <Divider />
                {week.categories.map(this.weekItems)} {/* we are mapping the category array to get the data for weekitem */}
            </List>
        )
    }

    render() {
        return(
            <div>
                {data.weeks.map((week, i) => this.createWeek(week, i))} {/*we are mapping the weeks array to get the data for createWeek*/}
            </div>
        )
    };
}

export default Week;