import React from 'react'
import Header from '../components/header'
import * as ROUTE from '../constant/router'

export default function HeaderContainer({children}) {
    return (
        <div>
            <Header>
                <Header.Frame>
                    <Header.Logo toRedirect={ROUTE.HOME} src={`/images/logo/netflix.svg`} />
                    <Header.ButtonLink to={ROUTE.SIGNIN}>Login</Header.ButtonLink>
                </Header.Frame>
                {children}
            </Header>
        </div>
    )
}
