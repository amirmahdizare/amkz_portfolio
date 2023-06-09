import React from 'react'

import { SectionHeader } from 'components/common'
import { SkillItem } from './components/SkillItem'
import react from '@assets/images/techs/react.png'
import next from '@assets/images/techs/next.svg'
import ts from '@assets/images/techs/ts.png'
import js from '@assets/images/techs/js.png'
import tailwind from '@assets/images/techs/tailwind.png'
import mui from '@assets/images/techs/mui.png'

export const TechnicalSkills = () => {
  return (
    <div className='flex flex-col items-center gap-4 '>
        <SectionHeader title='Technical Skills' />
        <div className='flex flex-row gap-4 justify-evenly items-center flex-wrap w-full p-4'>

            <SkillItem image={react} title='React JS' />
            <SkillItem image={next} title='Next JS' />
            <SkillItem image={ts} title='Typescript' />
            <SkillItem image={js} title='JavaScript' />
            <SkillItem image={tailwind} title='Tailwind' />
            <SkillItem image={mui} title='Material UI' />

        </div>

        
    </div>
  )
}
