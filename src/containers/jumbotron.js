import React, { Fragment } from "react";
import Jumbotron from "../components/jumbotron";
import jumboData from "../fixtures/jumbo.json";

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map(item => (
                <Fragment key={item.id}>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
                </Fragment>
            ))}
        </Jumbotron.Container>
    );
}
