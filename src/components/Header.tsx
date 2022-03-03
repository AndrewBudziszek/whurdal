import React from 'react';
import QuestionMarkCircleIcon from '@heroicons/react/outline/QuestionMarkCircleIcon';
import CogIcon from '@heroicons/react/solid/CogIcon';

function Header() {
    const buttonClassName = 'hover:text-gray-700'
    const iconClassName = 'h-5 w-9 sm:h-8 sm:w-11'

    return (
        <div className="place-items-center text-white">
            <div className="grid grid-cols-4 inline-flex items-center">
                <div className='header-left align-center flex justify-start'>
                    <button className={buttonClassName}>
                        <QuestionMarkCircleIcon className={iconClassName} />
                    </button>
                </div>
                <div className='text-4xl font-bold col-span-2 title align-center py-2'>
                    Whurdal
                </div>
                <div className='header-right align-center flex justify-end'>
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