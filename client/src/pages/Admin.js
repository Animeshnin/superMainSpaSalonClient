import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateTypes from "../components/modals/CreateTypes";

const Admin = () => {
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button onClick={() => setDeviceVisible(true)}>Добавить услугу</Button>
            <CreateDevice />
            <CreateTypes show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>

    );
};



export default Admin;