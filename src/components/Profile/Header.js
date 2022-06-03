import React, { Component } from 'react'

import {IconContext} from 'react-icons';

class  Header extends Component {
    render() { 
        

        return ( 
            
    <IconContext.Provider value ={{color:"blue", size:"1.5em" ,}}>
           
            </IconContext.Provider>
        )
    }
}

export default Header;

