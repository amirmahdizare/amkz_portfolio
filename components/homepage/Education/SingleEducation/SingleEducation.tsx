import Image from 'next/image'
import React from 'react'
import { EducationType } from '@/types'
import { AcademicCapIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
// import { MobileSlider } from './components/MobileSlider'
// import { DesktopSlider } from './components/DesktopSlider'

export const SingleEducation = ({ logo, name, date, grade , level , field  ,bgLogo}: EducationType) => {
    return (
        <div className='flex flex-col gap-4'>

            <div className='flex flex-col lg:flex-row justify-between items-stretch gap-4 lg:items-center w-full '>

                <div className='flex flex-row gap-4  '>

                    <div className='w-[90px] lg:w-[120px] aspect-square p-2 relative box-border rounded overflow-hidden shrink-0 '>
                        <Image src={logo.src} fill alt={name} className={clsx('object-contain  rounded-lg ' ,bgLogo ? 'bg-blue-1 p-2 border dark:border-none dark:bg-inherit' : '')} style={{ borderRadius: '8px' }} />
                    </div>

                    <div className='flex flex-col justify-between text-blue-2 dark:text-gray-300 basis-2/3 lg:basis-full'>

                        <span className='text-gray-800 dark:text-gray-200 text-base lg:text-lg font-semibold whitespace-pre-wrap '>{name}</span>

                        <div className='flex flex-row items-center gap-2'><CalendarIcon className='w-4 lg:w-6 aspect-square ' /><span>{date}</span></div>
                        <div className='flex flex-row items-center gap-2'><AcademicCapIcon className='w-4 lg:w-6 aspect-square ' /><span>{level} - {field}</span></div>
                        <div className='flex flex-row items-center gap-2'><StarIcon className='w-4 lg:w-6 aspect-square ' /><span>{grade}</span></div>


                    </div>



                </div>
                {/* {
                    !!link &&
                    <a target='_blank' href={link} className='text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary border items-center justify-center rounded flex flex-row gap-2 px-2 py-1'>
                        <span className='whitespace-nowrap'>Visit Company</span>
                        <PlayIcon className='w-6 aspect-square' />
                    </a>} */}

            </div>

            <div className='flex flex-row items-stretch lg:items-start flex-wrap lg:flex-nowrap gap-4 w-full'>

                {/* <div className='flex flex-col gap-2 basis-full lg:basis-2/3'>
                    <span className='text-gray-300'>Description:</span>
                    <ul className='text-gray-400 ml-4 leading-6'>
                        {description?.map(item => <li className='list-disc'>{item}</li>)}
                    </ul>

                </div> */}

                {/* <div className='flex flex-col items-start basis-full lg:basis-1/3 flex-wrap '>
                    <span className='text-gray-300'>Libraries And Tools:</span>
                    <div className='grid grid-cols-2 gap-4 py-4 w-full'>
                        {techs?.map(item => <div className='flex flex-row items-center gap-4 cols-span-1'>
                            <div className='w-[20px] lg:w-[30px] aspect-square relative'>
                                <Image src={item.image.src} fill alt={item.name} className='object-contain rounded' />
                            </div>
                            <span className='text-gray-400 text-sm'>{item.name}</span>
                        </div>)}
                    </div>

                </div> */}


            </div>


            {/*         <div className='flex flex-col w-full gap-4 '>
 
                <span className='text-gray-300 '>Sample Screenshots:</span>

                <div className='grid grid-cols-3 gap-4 w-full  '>

                    <div className={`col-span-3 h-[200px] ${!mobileShots ? '' : 'lg:col-span-2 '}`}>
                        <DesktopSlider items={desktopShots} fullWidth={!mobileShots} />
                    </div>

                    {!!mobileShots && <div className='col-span-3 lg:col-span-1  lg:h-[200px] h-[300px]'>
                        <MobileSlider items={mobileShots} />
                    </div>}

                </div>


            </div> */}

        </div>
    )
}
