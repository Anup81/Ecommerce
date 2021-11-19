import React from 'react'
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Headers() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
                        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                <LinkContainer to="/cart">
                    <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>
                    
                {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>

                        </LinkContainer>

                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                         
                    </NavDropdown>
                ):(
                    <LinkContainer to="/login">
                    <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                </LinkContainer>
                )}
                
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Headers
