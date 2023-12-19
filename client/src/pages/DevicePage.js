import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import '../style/DevicePage.css'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))

    }, []);
    return (
        <div className={'wrapper'}>
            <div className={"devicePage"}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className={'devicePage__description'}>
                    <h2>{device.name}</h2>
                    <h3>{device.price} руб.</h3>
                    <button className={'link'}>Добавить в корзину</button>
                    <Row className="d-flex flex-column m-3">
                        {device.info.map((info, index) =>
                            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Row>
                </div>
            </div>
        </div>

        // <Container className={'d-flex'}>
        //     <Col>
        //         <Image width={300} height={300} src={device.img}/>
        //     </Col>
        //     <div>
        //         <h2 className={'align-items-start'}>{device.name}</h2>
        //     </div>
        // </Container>
    );
};

export default DevicePage;