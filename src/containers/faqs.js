import React from "react";
import { Accordian } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            <Accordian.Frame>
                {faqsData.map(item => (
                    <Accordian.Item key={item.id}>
                        <Accordian.Header>{item.header}</Accordian.Header>
                        <Accordian.Body>{item.body}</Accordian.Body>
                    </Accordian.Item>
                ))}
            </Accordian.Frame>
        </Accordian>
    );
}
