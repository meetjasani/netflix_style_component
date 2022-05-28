import React from 'react'
import Accordion from '../components/accordion';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs';

export default function Faqs() {
    return (
        <div>
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                    {
                        faqsData.map((item) => (
                            <Accordion.Item key={item.id}>
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion.Frame>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </Accordion>
        </div>
    )
}
