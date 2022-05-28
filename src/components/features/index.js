import React from 'react'
import { Container, SubTitle, Title } from './styles/fetures'

export default function Feature({children, ...restProps}) {
    return (
        <div>
            <Container {...restProps}>{children}</Container>
        </div>
    )
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
    return (<Title {...restProps}>{children}</Title>)
}

Feature.SubTitle = function FeatureSubTitle({children, ...restProps}) {
    return (<SubTitle {...restProps}>{children}</SubTitle>)
}