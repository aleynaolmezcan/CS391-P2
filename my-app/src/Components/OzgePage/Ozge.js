import React from 'react';
import OzgeHeader from  './OzgeHeader';
import OzgeBody from  './OzgeBody';
import OzgeForm from './OzgeForm';
import OzgeFooter from './OzgeFooter';

export default class Ozge extends React.Component{
    render(){
        return <body>
                    <header>
                    <OzgeHeader/>
                    </header>
                    <OzgeBody/>
                    
                    <footer>
                    <OzgeFooter/>
                    </footer>
                </body>
    }
}