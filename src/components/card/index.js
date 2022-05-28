import React, {useState, useContext, createContext} from 'react'

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
  } from './styles/card';
  
  const FeatureContext = createContext();
export default function Card({children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({item, children, ...restProps}) {
    const {setShowFeature, setItemFeature} = useContext(FeatureContext)

    return <Item
                onClick={() => {
                    setItemFeature(item);
                    setShowFeature(true);
                }}
                {...restProps}
                >{children}
            </Item>
}

Card.Image = function CardImage({...restProps}) {
    return <Image {...restProps} />
}