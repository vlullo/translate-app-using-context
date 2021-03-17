import React from 'react';
import Field from './Field';
import CustomButton from './CustomButton';
import { Form } from 'reactstrap';

const UserCreate = () => {
    return (
        <Form>
            <Field />
            <CustomButton />
        </Form>
    );
};

export default UserCreate;