"use client"
import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet"

export default function Navigation() {
    const [open, setOpen] = useState(false)

    const navItems = [
        {
            navLink: "/",
            navItem: "Home",
        },
        {
            navLink: "#skills",
            navItem: "Skills",
        },
        {
            navLink: "#projects",
            navItem: "Projects",
        },
        {
            navLink: "#contact",
            navItem: "Contact",
        }
    ]

    // Smooth scroll handler for anchor links
    const handleSmoothScroll = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault()

            // Close mobile menu first
            if (open) {
                setOpen(false)
                // Use requestAnimationFrame for better timing
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        const element = document.querySelector(href)
                        if (element) {
                            // Get fresh position after layout settles
                            const rect = element.getBoundingClientRect()
                            const offsetTop = rect.top + window.pageYOffset - 20

                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            })
                        }
                    }, 200) // Reduced timeout
                })
            } else {
                // Desktop - scroll immediately
                const element = document.querySelector(href)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const offsetTop = rect.top + window.pageYOffset - 100
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    })
                }
            }
        } else {
            // For home link, just close the menu
            setOpen(false)
        }
    }

    return (
        <nav className="h-[70px] sticky top-0 z-40 bg-black w-full flex items-center justify-between md:px-50 sm:mt-5 pointer-events-auto">
            <Link href="/" className="text-white text-2xl sm:text-4xl font-bold hover:opacity-80 transition-opacity">
                Raj <span className="text-emerald-400">Sahu</span>
            </Link>

            {/* Desktop Menu */}
            <NavigationMenu className="hidden sm:block">
                <NavigationMenuList className="sm:gap-6">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.navLink}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.navLink}
                                    className="text-[20px] text-white hover:text-emerald-400 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white/5"
                                    onClick={(e) => handleSmoothScroll(e, item.navLink)}
                                >
                                    {item.navItem}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu */}
            <div className="sm:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:text-emerald-400 hover:bg-white/5"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="bg-[#181717] text-white border-l border-gray-800 w-64"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-left text-white text-xl font-bold">
                                Menu
                            </SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.navLink}
                                    href={item.navLink}
                                    className="text-lg text-white hover:text-emerald-400 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-white/5 border-b border-gray-800 last:border-b-0"
                                    onClick={(e) => handleSmoothScroll(e, item.navLink)}
                                >
                                    {item.navItem}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}