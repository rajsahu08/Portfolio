import Image from "next/image"
import TextType from "@/components/TextType";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
export default function HeroSection() {

    return (
        <div className=" w-full sm:flex mt-8 md:px-50 justify-between">
            <div className=" flex flex-col justify-center">
                <p className="mt-6 text-4xl sm:text-7xl font-bold">Hello<span className="text-emerald-400">.</span></p>
                <p className="mt-6 text-3xl font-bold">I am Raj Sahu</p>
                <TextType
                    text={["Software Developer", "Software Developer"]}
                    className="text-3xl md:text-4xl font-bold mt-6"
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
                <div className="mt-5 sm:mt-7 mb-5">
                    <Link href="#contact" scroll={true}>
                        <Button className="sm:mt-5 sm:p-5 sm:text-lg mr-2 bg-emerald-400 border-none pointer-events-auto cursor-pointer">
                            Got a Project ?
                        </Button>
                    </Link>
                    <a href="/Resume-Raj Sah(PDF).pdf" target="_blank" rel="noopener noreferrer">
                        <Button className="sm:mt-5 sm:p-5 sm:text-lg mr-2 bg-black pointer-events-auto cursor-pointer" variant="outline">
                            My Resume
                        </Button>
                    </a>

                </div>
            </div>
            <div className="flex justify-center items-center">
                <Image
                    src="/bg.jpg"
                    width={360}
                    height={360}
                    alt=""
                    className="pointer-events-auto rounded-full
            object-cover
            shadow-[0_0_20px_rgba(16,185,129,0.6)]
            hover:shadow-[0_0_25px_rgba(16,185,129,0.8)]
            transition-shadow
            duration-500
            !w-72 !h-72 md:!w-80 md:!h-80 lg:!w-[360px] lg:!h-[360px]"
                />
            </div>
        </div>
    )
}