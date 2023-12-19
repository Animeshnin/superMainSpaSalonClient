import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE, HOUSE_SITE} from "../const/consts";


const DeviceItem = ({device}) => {
    const  navigate = useNavigate()
    console.log(navigate)
    return (
        <Col  className={'d-flex'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 200, cursor: "pointer"}} border={'light'}>
                <Image width={280} height={210} src={process.env.REACT_APP_API_URL + device.img}/>

                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;