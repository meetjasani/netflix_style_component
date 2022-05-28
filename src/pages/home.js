import React from 'react'
import HeaderContainer from '../container/header';
import JumbotronContainer from '../container/jumbotron';
import FooterContainer from '../container/footer';
import Faqs from '../container/faqs';
import OptForm from '../components/opt-form';
import Feature from '../components/features';

export default function Home() {
    return (
        <div>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <Faqs />
            <FooterContainer />
        </div>
    )
}
