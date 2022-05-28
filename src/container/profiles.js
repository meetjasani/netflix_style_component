import React from 'react'
import Header from '../components/header'
import Profiles from '../components/profiles'
import * as ROUTE from '../constant/router'

export default function SelectProfilesContainer({user, setProfile, ...restProps}) {
    return (
        <div>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo toRedirect={ROUTE.HOME} src={`/images/logo/netflix.svg`} />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile(user)}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </div>
    )
}
