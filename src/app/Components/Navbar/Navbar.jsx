"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="shadow-2xl py-4 px-4 bg-black bg-opacity-40 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link className="text-2xl font-extrabold text-yellow-500" href="/">
          YH
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block bg-transparent">
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <Link className="font-bold text-white hover:text-yellow-500" href="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="font-bold text-white hover:text-yellow-500" href="/AboutMe">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="font-bold text-white hover:text-yellow-500" href="/Experience">
                Experience
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="font-bold text-white hover:text-yellow-500" href="/projects">
                Projects
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Hamburger */}
        <div className="md:hidden bg-yellow-400 text-black">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-yellow-400 shadow-md mt-2 rounded-lg p-4 space-y-4">
          <Link
            className="block font-bold hover:text-yellow-500"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block font-bold hover:text-yellow-500"
            href="/AboutMe"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="block font-bold hover:text-yellow-500"
            href="/Experience"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            className="block font-bold hover:text-yellow-500"
            href="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  )
}
