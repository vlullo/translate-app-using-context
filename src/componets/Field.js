import React from 'react';
import { Label, Input } from 'reactstrap';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Nom';
        return (
            <>
                <Label>{text}</Label>
                <Input type="text" />
            </>
        );
    }
}

export default Field;