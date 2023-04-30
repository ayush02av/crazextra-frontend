import Link from 'next/link'
import Image from 'next/image'
import skills from '@/assets/illustrations/skills.svg'

export default function Hero() {
    return (
        <div
            id="hero"
            className="h-screen bg-green-200 grid place-items-center"
        >
            <div>
                <Link href='/' className="grid flex-1 place-items-center mb-10">
                    <div className="text-5xl font-bold">CrazeXtra</div>
                    <div className="text-md font-semibold">One extra mile for your craze</div>
                </Link>
                <div className="grid flex-1 place-items-center mb-20">
                    <Image
                        src={skills}
                        alt="skills"
                        width={500}
                    />
                </div>
                <div className="grid place-items-center">
                    <a
                        href='/#communities'
                        className="cursor-pointer duration-150 bg-green-100 text-gray shadow-md hover:shadow-lg font-semibold px-5 py-2 rounded-full"
                    >
                        Start exploring
                    </a>
                </div>
            </div>
        </div>
    )
}