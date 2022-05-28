import React, { useState, createContext, useContext, useEffect } from 'react'
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}) {
    return (
        <div>
            <Container {...restProps}>
                <Inner>{children}</Inner>
            </Container>
        </div>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    
    return (
        <ToggleContext.Provider value={{ toggleShow,  setToggleShow}}>
            <Item  {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    useEffect(()=>{
        setToggleShow(false);
    },[]);
    const icon = toggleShow ? <img src="/images/icons/close-slim.png" alt="Close" /> : <img src="/images/icons/add.png" alt="Open" />
    return (
        <Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>{children}
        {icon}
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const { toggleShow } = useContext(ToggleContext);
    return  toggleShow ? <Body {...restProps}>{children}</Body> : null;
}