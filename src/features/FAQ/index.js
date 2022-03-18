import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.css';

const FAQ = [
    {
        question: 'Where will all the money go?',
        answer: 'All the money from minting will be automatically donated to the state support fund.'
    },
    {
        question: 'Who’s on the team?',
        answer: 'We are all Ukrainians from all over the country.'
    },
    {
        question: 'What is the total supply of NFTs?',
        answer: 'There will be 10,000 NFTs.'
    },
    {
        question: 'What is the mint price of NFT?',
        answer: 'Mint price will be announced in our community, check for updetes'
    },
    {
        question: 'On what blockchain do you planning to run NFT’s?',
        answerComponent: `
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">
                        Stand with the people of Ukraine. Now accepting cryptocurrency donations. Bitcoin, Ethereum and USDT.
                        <br />
                        <br />
                        BTC - 357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P
                        <br />
                        <br />
                        ETH and USDT (ERC-20) - 0x165CD37b4C644C2921454429E7F9358d18A45e14
                    </p>
                    &mdash;
                    Ukraine / Україна (@Ukraine)
                    <a href="https://twitter.com/Ukraine/status/1497594592438497282?ref_src=twsrc%5Etfw">February 26, 2022</a>
                </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
    },
]

export const FaqSection = () => {
    return (
        <section id="faq" class="faq">
            <h1>Frequently asked questions</h1>
            <Accordion className="faq__accordion">
                {FAQ.map(({ question, answer, answerComponent }) => {
                    return (
                        <AccordionItem className="faq__accordion-item">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {question}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel
                                dangerouslySetInnerHTML={{
                                    __html: answerComponent ? answerComponent : `
                                        <p>
                                            ${answer}
                                        </p>
                                    `
                                }}>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </section>
    )
}