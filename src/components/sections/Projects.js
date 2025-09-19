import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="w-full min-h-[70vh] md:px-50 mt-5 bg-transparent text-white" id="projects">
            <Label className="relative text-2xl w-fit sm:text-4xl pointer-events-auto group cursor-pointer text-white">
                Projects
            </Label>

            {/* Projects Container */}
            <div className="mt-6 gap-8 grid grid-cols-1 lg:grid-cols-2">
                {/* Project Card 1 */}
                <div className="group pointer-events-auto border border-gray-700 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl hover:shadow-emerald-200/10 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/W-1.jpeg"
                                            alt="E-commerce Dashboard"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/W-2.jpeg"
                                            alt="E-commerce Mobile View"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/W-3.jpeg"
                                            alt="E-commerce Product Page"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                            <CarouselNext className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                        </Carousel>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            <div className="w-2 h-2 rounded-full bg-white/80"></div>
                            <div className="w-2 h-2 rounded-full bg-white/60"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="mb-3">
                            <h3 className="text-2xl font-semibold  text-white group-hover:text-emerald-400 transition-colors duration-300">
                                Wanderlust
                            </h3>
                            <p className="text-gray-300 text-base mb-4 leading-relaxed">
                                A Rental platform enabling user registration, property listing, and review submission.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-4">
                            <Link href="https://airbnb-djqn.onrender.com/listing" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </button>
                            </Link>

                            <Link href="https://github.com/rajsahu08/AIRBNB" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <Github className="w-4 h-4" />
                                    Code
                                </button>
                            </Link>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 ">
                            <span className="px-3 py-1 bg-green-600/20 border border-green-600/30 text-green-300 text-sm rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-gray-600/20 border border-gray-600/30 text-gray-300 text-sm rounded-full">Express</span>
                            <span className="px-3 py-1 bg-orange-600/20 border border-orange-600/30 text-orange-300 text-sm rounded-full">HTML</span>
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 text-blue-300 text-sm rounded-full">CSS</span>
                            <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 text-yellow-300 text-sm rounded-full">JavaScript</span>
                            <span className="px-3 py-1 bg-green-600/20 border border-green-600/30 text-green-300 text-sm rounded-full">MongoDB</span>
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 text-blue-300 text-sm rounded-full">Cloudinary</span>
                            <span className="px-3 py-1 bg-indigo-600/20 border border-indigo-600/30 text-indigo-300 text-sm rounded-full">Mapbox</span>
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="group pointer-events-auto border border-gray-700 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl hover:shadow-emerald-200/10 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/insta.png"
                                            alt="Instagram Video Downloader"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                            <CarouselNext className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                        </Carousel>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            <div className="w-2 h-2 rounded-full bg-white/80"></div>
                            <div className="w-2 h-2 rounded-full bg-white/60"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="mb-3">
                            <h3 className="text-2xl font-semibold  text-white group-hover:text-emerald-400 transition-colors duration-300">
                                Insta Reel Downloader
                            </h3>
                            <p className="text-gray-300 text-base mb-4 leading-relaxed">
                                Created a responsive web application to download Instagram reels.

                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-4">
                            <Link href="https://instagram-reel-downloader-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </button>
                            </Link>

                            <Link href="https://github.com/rajsahu08/InstagramDownloader" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <Github className="w-4 h-4" />
                                    Code
                                </button>
                            </Link>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 ">
                            <span className="px-3 py-1 bg-orange-600/20 border border-orange-600/30 text-orange-300 text-sm rounded-full">HTML</span>
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 text-blue-300 text-sm rounded-full">CSS</span>
                            <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 text-yellow-300 text-sm rounded-full">JavaScript</span>
                        </div>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="group pointer-events-auto border border-gray-700 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl hover:shadow-emerald-200/10 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/weather.png"
                                            alt="Weather"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/W-2.jpeg"
                                            alt="E-commerce Mobile View"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="relative aspect-[16/10] w-full bg-gray-800 overflow-hidden">
                                        <Image
                                            src="/W-3.jpeg"
                                            alt="E-commerce Product Page"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                            <CarouselNext className="bg-black/70 hover:bg-emerald-600/80 border-gray-500 hover:border-emerald-400 text-white transition-all duration-200" />
                        </Carousel>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            <div className="w-2 h-2 rounded-full bg-white/80"></div>
                            <div className="w-2 h-2 rounded-full bg-white/60"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="mb-3">
                            <h3 className="text-2xl font-semibold  text-white group-hover:text-emerald-400 transition-colors duration-300">
                                Weather App
                            </h3>
                            <p className="text-gray-300 text-base mb-4 leading-relaxed">
                                Created weather app showing live updates, 3-day forecast & motivational quotes. Integrated external APIs
                                for weather data and quotes.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-4">
                            <Link href="https://weatherapp-seven-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </button>
                            </Link>

                            <Link href="https://github.com/rajsahu08/Weather" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm">
                                    <Github className="w-4 h-4" />
                                    Code
                                </button>
                            </Link>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 ">
                            <span className="px-3 py-1 bg-orange-600/20 border border-orange-600/30 text-orange-300 text-sm rounded-full">HTML</span>
                            <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 text-blue-300 text-sm rounded-full">CSS</span>
                            <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 text-yellow-300 text-sm rounded-full">JavaScript</span>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}