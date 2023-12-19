import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDevice, fetchDevices, fetchTypes} from "../http/deviceApi";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices().then(data => device.setDevices(data))
    }, [])
    return (
        <Container >
            <Row className={'mt-5'} d>
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={8} >
                    <DeviceList/>
                </Col>
            </Row>

        </Container>
    );
});

export default Shop;