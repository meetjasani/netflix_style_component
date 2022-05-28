import React, {useState, useContext} from 'react'
import FooterContainer from '../container/footer'
import HeaderContainer from '../container/header'
import Form from '../components/form'
import * as ROUTE from '../constant/router'
import {firebaseContext} from '../context/firebase'
import { useHistory } from 'react-router-dom'

export default function Signup() {
    const history = useHistory();

    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {firebase} = useContext(firebaseContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        return firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(res => {
                    res.user.updateProfile({
                        displayName : firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    history.push(ROUTE.BROWSE);
                }).catch(error => {
                    setFirstName('');
                    setEmail('');
                    setPassword('');
                    setError(error.message)
                })
    }

    return (
        <div>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error ? <Form.Error>{error}</Form.Error> : ''}
                    <Form.Base>
                        <Form.Input 
                            placeholder="first name"
                            value={firstName} 
                            onChange={({target}) => setFirstName(target.value)}/>
                        <Form.Input 
                            placeholder="Email"
                            value={email}
                            autoComplete="off"
                            onChange={({target}) => setEmail(target.value)}/>
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            value={password} 
                            onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit onClick={handleSignUp}>Sign Up</Form.Submit>    
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTE.SIGNIN}>Sign up now.</Form.Link>
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
