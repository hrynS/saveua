import { Fragment } from 'react';
import './style.css';

const HISTORY = {
    0: {
        title: 'How it began.',
        text: `At 2:04 am UTC on February 24, Russian troops began bombarding Ukrainian soil. The Russian government declared war on us. Not a single person neither in Ukraine, nor in Russia could have ever imagined that such events could gain momentum to the point of no return.
        
        The Russian government began to devastate our buildings and murder our people, indiscriminately, for their insatiable gain.`,
    },
    1: {
        title: 'We will never surrender.',
        text: `Ukrainians, who are well-known for the long history of hostile infringement of their freedom, rights and cultural values, have never accepted disgraceful attitudes, implying to always fight the enemies back.
        
        Thus, with brave spirit and hope for victory, we got fully-equipped and prepared to defend our national beliefs and possessions. We are desperately immaculate when it comes to our sovereignty.
        `,
    },
    2: {
        title: 'Still not the strongest…',
        text: `
        Despite all the external support provided, for which we are grateful, indeed, we remain an insufficiently strong economy to fight the aggressor, whose economy is several times larger than ours. 
Therefore, in this war, we are looking for support from all countries and people worldwide.

That is why we decided to act, rather than wait. 
That is why we ended up here.
   `,
    },
    3: {
        title: 'Few people with huge ambitions.',
        text: `
        Here's the part where we came up with the idea to create a project that could help our country equalize the chances in this war.
         
The project itself aims not only to help our military to get more efficient, but also to unite the nations around the world in order not to lead to a war ever again!

   `,
    }
};

export const HistorySection = () => {
    const renderBullet = () => {
        return (
            <div class="history__bullet">
                <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11.3135" width="16" height="16" transform="rotate(45 11.3135 0)" />
                </svg>
            </div>
        );
    }
    const renderHistoryItem = () => {
        return Object.values(HISTORY).map(({ title, text }, idx) => {
            return (
                <Fragment>
                    <div class="history__chapter-title">{renderBullet()}<h2><span class="beige-color">Chapter {idx + 1}.</span> - {title}</h2></div>
                    <div class="history__text">
                        {text}
                    </div>
                </Fragment>
            );
        });
    }
    return (
        <section id="history" class="history">
            <h1 className='display-block'>Why this project? History.</h1>
            <div class="history__progress-line"></div>
            {renderHistoryItem()}
        </section>
    );
}