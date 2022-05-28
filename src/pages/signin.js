import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/form'
import FooterContainer from '../container/footer';
import HeaderContainer from '../container/header';
import {firebaseContext} from '../context/firebase'
import * as ROUTE from '../constant/router'

export default function Signin() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { firebase } = useContext(firebaseContext)

    const isInvalid = email === '' || password === '';

    const handleSignIn = (e) => {
        e.preventDefault();
        return firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(()=>{
                            history.push(ROUTE.HOME)           
                        }).catch((error)=>{
                            setEmail('');
                            setPassword('');
                            setError(error.message)
                        })
    }
    return (
        <div>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error ? <Form.Error> {error} </Form.Error> : ''}
                    <Form.Base>
                        <Form.Input 
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}/>
                        <Form.Input 
                            placeholder="Password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid} onClick={handleSignIn}>Sign In</Form.Submit>    
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTE.SIGNUP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </div>
    )
}
