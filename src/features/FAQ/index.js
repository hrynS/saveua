import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.css';

const Arrow = () => {
    return (
        <div className='arrow-icon'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
                style={{
                    enableBackground: "new 0 0 330 330",
                }}
            >
                <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
            </svg>
        </div>)
};

const FAQ = [
    {
        question: 'Where will all the money go?',
        answer: `All money will be donated to funds to support the people of Ukraine, such as: the military, to help ordinary citizens, as well as to rebuild the city.

        What kind of funds - will be decided by our community, for complete openness!`
    },
    {
        question: 'Who’s on the team?',
        answer: 'We are all Ukrainians from all over the country.'
    },
    {
        question: 'What is the total supply of NFTs?',
        answer: 'There will be 3100 NFTs. Why 3100? Because this is a very symbolic number for Ukraine, because this year the Ukrainian people will celebrate 31 years of independence!'
    },
    {
        question: 'What is the mint price of NFT?',
        answer: 'Mint price will be 0.05 ETH, so that everyone who would like to help has such an opportunity! Also, if you want to donate more, you can mint up to 10 NFT’s, and max 5 at a time'
    },
    {
        question: 'On what blockchain do you planning to run NFT’s?',
        // answerComponent: `
        //         <blockquote class="twitter-tweet">
        //             <p lang="en" dir="ltr">
        //                 Stand with the people of Ukraine. Now accepting cryptocurrency donations. Bitcoin, Ethereum and USDT.
        //                 <br />
        //                 <br />
        //                 BTC - 357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P
        //                 <br />
        //                 <br />
        //                 ETH and USDT (ERC-20) - 0x165CD37b4C644C2921454429E7F9358d18A45e14
        //             </p>
        //             &mdash;
        //             Ukraine / Україна (@Ukraine)
        //             <a href="https://twitter.com/Ukraine/status/1497594592438497282?ref_src=twsrc%5Etfw">February 26, 2022</a>
        //         </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
        answer: 'NFT’s will be on Ethereum blockchain'
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
                                    <Arrow />
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