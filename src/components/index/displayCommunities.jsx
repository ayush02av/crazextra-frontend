import Image from 'next/image'
import music from '@/assets/illustrations/music.svg'
import art from '@/assets/illustrations/art.svg'
import sports from '@/assets/illustrations/sports.svg'
import { useState } from 'react'

const communities = [
    {
        'title': 'Music',
        'theme': 'bg-blue-200',
        'icon': music
    },
    {
        'title': 'Art',
        'theme': 'bg-red-200',
        'icon': art
    },
    {
        'title': 'Sports',
        'theme': 'bg-yellow-100',
        'icon': sports
    }
]

export default function DisplayCommunities() {
    const [index, setIndex] = useState(0)

    function manageIndex(step) {
        var newIndex = index + step
        if (newIndex == communities.length) newIndex = 0
        else if (newIndex == -1) newIndex = communities.length - 1
        setIndex(newIndex)
    }

    return (
        <div
            id="communities"
            className={`h-screen ${communities[index].theme} grid grid-cols-3 place-items-center`}
        >
            <i onClick={() => manageIndex(-1)} className="cursor-pointer text-3xl fas fa-arrow-left"></i>
            <div>
                <div className="grid flex-1 place-items-center mb-10">
                    <div className="text-5xl font-semibold">{communities[index].title}</div>
                </div>
                <div className="grid flex-1 place-items-center mb-20">
                    <Image
                        src={communities[index].icon}
                        alt="skills"
                        height={300}
                    />
                </div>
            </div>
            <i onClick={() => manageIndex(1)} className="cursor-pointer text-3xl fas fa-arrow-right"></i>
        </div>
    )
}