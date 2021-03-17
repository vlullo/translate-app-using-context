import React from 'react';
import { Button } from 'reactstrap';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class CustomButton extends React.Component {
    // static contextType = LanguageContext;
    //console.log(this.context);

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Soumettre';
    }

    render() {
        return (
            <ColorContext.Consumer>
            {(color) => 
                <Button color={`${color}`} style={{marginTop: 10}}>
                    <LanguageContext.Consumer>
                        {(value) => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                </Button>
            }
            </ColorContext.Consumer>
        );
    }
}

export default CustomButton;