import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const SkillItem = ({ image, title }: { image: StaticImageData, title: string }) => {

    return (
        <div className='col-span-1 flex flex-row lg:flex-col gap-4 lg:gap-4 items-center justify-between lg:justify-center'>

            <div className='aspect-square w-[50px] lg:w-[85px] relative '>
                <Image alt={title} src={image.src} fill className='object-contain rounded-lg' />
            </div>

            <span className='text-blue-2 font-semibold dark:text-gray-300 text-base flex-1'>{title}</span>

        </div>
    )
}
