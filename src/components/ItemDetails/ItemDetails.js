import React, { Component } from 'react';
import firebase from 'firebase';

import classes from './ItemDetails.css';

class ItemDetails extends Component {
    //TODO: Get item from DB using props.itemID
    state = {
        item: {}
    
    }

    componentWillMount () {
        console.log('item');
        const query = new URLSearchParams(this.props.location.search);
        const item = {};
        for (let param of query.entries()){
            
            item[param[0]] = param[1];
        }

        this.setState({item: item});

        
    }

    // //Dummy Item
    
    // Once this is implemented using Props, need to change everything that gets info from Items
    render() {
        const item = {
            title: 'DVD Collection',
            desc: 'This is my extensive DVD collection. I have a multitude of genres. They are very rare. wow.',
            img: 'https://i.ytimg.com/vi/0S-gteTLcko/maxresdefault.jpg',
            zipCode: 92004,
            owner: 'PennyMonster38'
        }
        console.log('this.state.item');
        console.log(this.state.item);
    
        return (

            <div className = {classes.ItemDetails}>
                <div className = {classes.row}>
                    <div className = {classes.col1of2}>
                        
                        <h1 className={classes.title}>{this.state.item.name}</h1>
                        <img src={this.state.item.img} className={classes.image}/>
                        <div className={classes.ownerDetails}>
                            {/* this is a placeholder for now, it should be the userIcon */}
                            <div className={classes.userIcon}></div>
                            <p className = {classes.owner}>{item.owner}</p>
                            <p className = {classes.owner}>[rating]</p>
                        </div>
                        
                    </div>
    
                    <div className = {classes.col1of2}>
                        {/*pass in item.zipCode as props to the map*/}
                        MAP
                    </div>
                </div>
                <div className = {classes.row}>
                    <div className = {classes.description}>
                        <p classes = {classes.descText}>{this.state.item.desc}</p>
                    </div>
                </div>
    
            </div>
        );
    }
   

    
}

export default ItemDetails;