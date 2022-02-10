import React from 'react';
import QuestionMarkCircleIcon from '@heroicons/react/outline/QuestionMarkCircleIcon'
import CogIcon from '@heroicons/react/solid/CogIcon'
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon'

function Header() {
    return (
        <div className="grid place-items-center">
            <div className="grid grid-cols-4 gap-0">
                <button className='col-span-1'>
                    <QuestionMarkCircleIcon className='h-16 p-5 text-gray-600' />
                </button>
                <div className='text-5xl uppercase font-bold text-white py-3 col-span-2'>whurdal</div>
                <div className='col-span-1'>
                    <div className="grid grid-cols-2">
                        <button className='gap-0'>
                            <ChartBarIcon className='h-16 p-5 text-gray-600' />
                        </button>
                        <button className='gap-0'>
                            <CogIcon className='h-16 p-5 text-gray-600' />
                        </button>
                    </div>
                </div>

            </div>
            <hr className='w-2/4' />
        </div>
    )
}

export default Header;