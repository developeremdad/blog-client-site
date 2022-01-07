import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import "./Login.css";

const Login = () => {
    const {handleGoogleLogin} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // login with google 
    const loginWithGoogle = () =>{
        handleGoogleLogin(location, navigate);
    }
    return (
        <div className="login-container">
            <Row xs={1} md={1} lg={2} style={{ width: "100%" }}>
                <Col>
                    <h1 style={{ color: "black" }}>Login here</h1>
                    <Container className="form-login">
                      <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form-label">Email </Form.Label>
                                <Form.Control name="email" required  type="email" className="login-input" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="form-label"> password</Form.Label>
                                <Form.Control name="password" required  type="password" className="login-input" placeholder="Password" />
                            </Form.Group>

                            <Button size="lg" className="sign-in" type="submit">
                                sign in
                            </Button><br />
                            <h2 style={{ color: "white" }}>or</h2><br />
                            <Button  className="sign-in" onClick={loginWithGoogle}>Google sign in</Button><br /><br />
                            <h2 style={{ color: "white" }}> Not registerd?sign up now</h2>
                            <Link to="/register" className="register-text"> <h2> Go signup </h2></Link>
                            
                        </Form>
                    </Container>
                </Col>
                <Col style={{ marginBottom: '5px' }}>
                    <Image style={{ height: '900px' }} fluid src="https://i.ibb.co/SsLDP1Z/New-Project-7.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Login;