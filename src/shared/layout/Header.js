import React from 'react';
import PropTypes from 'prop-types';
import Telesto from '../images/Telesto.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {

    const {title} = props;

    return ( 
        <header className="App-header">

            <Navbar >
                <Container className="nav0">
                    <Nav className="nav1">
                    <Navbar.Brand ><img src={Telesto} className="App-logo" alt="logo"/></Navbar.Brand>
                    <Navbar.Brand ><h1>José Miguel Ruiz Mata</h1></Navbar.Brand>
                    </Nav>    
                    <Nav className="nav2">
                        <Nav.Link href="/"><p> Home </p></Nav.Link>
                        <Nav.Link href="/CurrculumVitae"><p>CurriculumVitae </p></Nav.Link>
                        <Nav.Link href="/Portafolio"><p> Portafolio </p></Nav.Link>
                        <Nav.Link href="/contacto"><p>Contacto </p></Nav.Link>
                    </Nav>   
                </Container>
            </Navbar>
           
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

export default Header;