import React from "react";
import {
    Container,
    Inner,
    Title,
    Header,
    Body,
    Item,
} from "./styles/accordian";

export default function Accordian({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordian.Item = function AccordianItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordian.Header = function AccordianHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};

Accordian.Body = function AccordianBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>;
};
