import React, {useState} from 'react'
import { Link as ReactRedirectLink } from 'react-router-dom';
import {
    Container,
    Group,
    Background,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    TextLink,
    Feature,
    Logo,
  } from './styles/header';

export default function Header({bg = true , children, ...restProps}) {
    return (
        <div>
            {
                bg ? <Background {...restProps}>{children}</Background>:children
            }
        </div>
    )
}



Header.Frame = function HeaderFrame({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.Logo = function HeaderLogo({toRedirect, children, ...restProps}){
    return (
        <ReactRedirectLink to={toRedirect}>
            <Logo {...restProps} />
        </ReactRedirectLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}

Header.Text = function HeaderButtonLink({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return (
        <TextLink {...restProps}>{children}</TextLink>
    )
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return (
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Picture = function HeaderPicture({src ,children, ...restProps}){
    return (
        <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
    )
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return (
        <Dropdown {...restProps}> {children} </Dropdown>
    )
}

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    children, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                PlaceHolder="Search films and series"
                active={searchActive}
                />
        </Search>
    )
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}
