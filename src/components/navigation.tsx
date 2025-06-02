'use client';

import { ThemeSelector } from '@/components/theme/theme-selector';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { DashboardButton } from './dashboard-button';

const navigationItems = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Company', href: '#company' },
  { name: 'Resources', href: '#resources' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Section>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-bold">P</span>
              </div>
              <span className="text-xl font-bold">Peaknode</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons & Theme Selector */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button asChild>
              <Link href="#demo">Request Demo</Link>
            </Button>
            <DashboardButton />

            <ThemeSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">P</span>
                    </div>
                    <span className="text-xl font-bold">Peaknode</span>
                  </Link>

                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="flex flex-col space-y-2 pt-4">
                    <Button asChild>
                      <Link href="#demo" onClick={() => setIsOpen(false)}>
                        Request Demo
                      </Link>
                    </Button>
                    <DashboardButton />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Section>
    </header>
  );
}
