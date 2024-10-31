
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { WorkerContext } from "./../context/workersContext";

function MainNavbar() {
    let [search, setSearch] = useState('');
    const {setWorkerSearch, getWorkers} = useContext(WorkerContext);

    const handleChangeSearch = (e) => {
        // setSearch(e.target.value);
        // setWorkerSearch(e.target.value);
    }

    // const handleClickSearch = () => {
    //     console.log(getWorkers());
    // }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Empleados de la empresa</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    </Nav>
                    <Form className="d-flex">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link to="/" className="nav-link">Inicio</Link>
                            <Link to="/register" className="nav-link">Registro</Link>
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
