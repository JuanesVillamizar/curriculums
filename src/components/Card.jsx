import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function CardWorker({ worker, color }) {
    // console.log(color);
    return (
        <Card style={{ width: '290px', margin: 10 }}>
            <div className='container-img' style={{ backgroundColor: color }}>
                <span>270 x 150</span>
            </div>
            <Card.Body>
                <Card.Title>{worker.nombre}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{worker.puesto_aplicado}</ListGroup.Item>
                <ListGroup.Item>{worker.informacion_contacto.telefono}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link to={"/worker/" + worker.id}>Ver mas</Link>
            </Card.Body>
        </Card>
    )
}
