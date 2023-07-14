import { ProjectType } from "types";
import tanalandLogo from '@assets/images/projects/tanaland.png'

////Tanaland
import tanalandDesktop1 from 'assets/images/projects/tanaland/desktop (1).png'
import tanalandDesktop2 from 'assets/images/projects/tanaland/desktop (2).png'
import tanalandDesktop3 from 'assets/images/projects/tanaland/desktop (3).png'
import tanalandDesktop4 from 'assets/images/projects/tanaland/desktop (4).png'

import tanalandMobile1 from 'assets/images/projects/tanaland/mobile (1).png'
import tanalandMobile2 from 'assets/images/projects/tanaland/mobile (2).png'
import tanalandMobile3 from 'assets/images/projects/tanaland/mobile (3).png'
import tanalandMobile4 from 'assets/images/projects/tanaland/mobile (4).png'



import react from '@assets/images/techs/react.png'
import next from '@assets/images/techs/next.svg'
import ts from '@assets/images/techs/ts.png'
import js from '@assets/images/techs/js.png'
import tailwind from '@assets/images/techs/tailwind.png'
import mui from '@assets/images/techs/mui.png'


//Sector 
import sectorLogo from '@assets/images/projects/Sector/logo.png'
import sectorDesktop1 from 'assets/images/projects/Sector/d1.png'
import sectorDesktop2 from 'assets/images/projects/Sector/d2.png'
import sectorDesktop3 from 'assets/images/projects/Sector/d3.png'
import sectorDesktop4 from 'assets/images/projects/Sector/d4.png'
import sectorDesktop5 from 'assets/images/projects/Sector/d5.png'
import sectorDesktop6 from 'assets/images/projects/Sector/d6.png'
import sectorDesktop7 from 'assets/images/projects/Sector/d7.png'
import sectorDesktop8 from 'assets/images/projects/Sector/d8.png'
import sectorDesktop9 from 'assets/images/projects/Sector/d9.png'
import sectorDesktop10 from 'assets/images/projects/Sector/d10.png'
import sectorgif1 from 'assets/images/projects/Sector/gif.gif'

import sectorMobile1 from 'assets/images/projects/Sector/m1.png'
import sectorMobile2 from 'assets/images/projects/Sector/m2.png'
import sectorMobile3 from 'assets/images/projects/Sector/m3.png'
import sectorMobile4 from 'assets/images/projects/Sector/m4.png'
import sectorMobile5 from 'assets/images/projects/Sector/m5.png'
import sectorMobile6 from 'assets/images/projects/Sector/m6.png'






export const projects: ProjectType[] = [
    {
        date: '2023',
        industry: 'Ecommerce Marketplace',
        logo: tanalandLogo,
        name: 'Tanaland',
        stack: 'Front End',
        techs: [
            { name: 'Next 13', image: next },
            { name: 'React', image: react },
            { name: 'Typescript', image: ts },
            { name: 'JavaScript', image: js },
            { name: 'Tailwind', image: tailwind },
        ],
        description: [
            'Developed front-end projects in the e-commerce marketplace domain',
            'Implemented a responsive website using Next.js 13.4',
            'Created a seamless user experience across different devices and screen sizes',
            'Ensured easy navigation and interaction for users on desktop, tablet, and mobile devices',
            'Handled a large number of users simultaneously'
        ],
        desktopShots: [
            { description: 'tanaland-desktop-shot-1', img: tanalandDesktop1 },
            { description: 'tanaland-desktop-shot-2', img: tanalandDesktop2 },
            { description: 'tanaland-desktop-shot-3', img: tanalandDesktop3 },
            { description: 'tanaland-desktop-shot-4', img: tanalandDesktop4 },
        ],
        link: 'https://www.tanaland.com/',
        mobileShots: [
            { description: 'tanaland-mobile-shot-1', img: tanalandMobile1 },
            { description: 'tanaland-mobile-shot-2', img: tanalandMobile2 },
            { description: 'tanaland-mobile-shot-3', img: tanalandMobile3 },
            { description: 'tanaland-mobile-shot-4', img: tanalandMobile4 },

        ]
    }
    , {
        date: '2022 - 2023',
        industry: 'Online Courses',
        logo: sectorLogo,
        name: 'Sector',
        stack: 'Front End',
        techs: [
            { name: 'React', image: react },
            { name: 'JavaScript', image: js },
            { name: 'Material UI', image: mui },
        ],
        description: [
            'Developed a React app for an interactive learning platform used by thousands of students',
            'Worked on complex UI integrations, including data visualization and interactive features',
            'Utilized React components and libraries to create a visually appealing and user-friendly interface ',
            'Along with the Product Manager discuss and create aesthetic and UX-friendly interfaces.',
            'Conducted regular testing and debugging to ensure smooth functionality of the application .',
            'Participated in code reviews and provided feedback to improve overall code quality',
        ]
        ,
        link:'https://sector.soorinsec.ir/',
        desktopShots:[
            { description: 'sector-desktop-shot-1', img: sectorDesktop1 },
            { description: 'sector-desktop-shot-2', img: sectorDesktop2 },
            { description: 'sector-desktop-shot-3', img: sectorDesktop3 },
            { description: 'sector-desktop-shot-4', img: sectorDesktop4 },
            { description: 'sector-desktop-shot-5', img: sectorDesktop5 },
            { description: 'sector-desktop-shot-6', img: sectorDesktop6 },
            { description: 'sector-desktop-shot-7', img: sectorDesktop7 },
            { description: 'sector-desktop-shot-8', img: sectorDesktop8 },
            { description: 'sector-desktop-shot-9', img: sectorDesktop9 },
            { description: 'sector-desktop-shot-10', img: sectorDesktop10 },
        ],
        mobileShots:[
            { description: 'sector-mobile-shot-1', img: sectorMobile1 },
            { description: 'sector-mobile-shot-2', img: sectorMobile2 },
            { description: 'sector-mobile-shot-3', img: sectorMobile3 },
            { description: 'sector-mobile-shot-4', img: sectorMobile4 },
            { description: 'sector-mobile-shot-5', img: sectorMobile5 },
            { description: 'sector-mobile-shot-6', img: sectorMobile6 },
        ]
    }
]