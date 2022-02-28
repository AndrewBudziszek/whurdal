import React from 'react';
import QuestionMarkCircleIcon from '@heroicons/react/outline/QuestionMarkCircleIcon'
import CogIcon from '@heroicons/react/solid/CogIcon'
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon'

function Header() {
    const buttonClassName = 'hover:text-gray-700'
    const iconClassName = 'h-6 w-10'
    return (
        <div className="place-items-center text-white">
            <div className="grid grid-cols-4 inline-flex items-center">
                <div className='header-left align-center flex justify-start'>
                    <button className={buttonClassName}>
                        <QuestionMarkCircleIcon className={iconClassName} />
                    </button>
                </div>
                <div className='text-4xl font-bold col-span-2 uppercase title align-center py-2'>Whurdal</div>
                <div className='header-right align-center flex justify-end'>
                    <button className={buttonClassName}>
                        <ChartBarIcon className={iconClassName} />
                    </button>
                    <button className={buttonClassName}>
                        <CogIcon className={iconClassName} />
                    </button>
                </div>
            </div>
            <hr className='w-full' />
        </div>
    )
}

export default Header;