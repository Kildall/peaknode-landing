'use client';

import { Separator } from '@/components/ui/separator';
import { FileText, MessageCircle, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  company: [
    { name: 'About', href: '#company' },
    { name: 'Mission & Vision', href: '#company' },
    { name: 'Core Values', href: '#company' },
    { name: 'Roadmap', href: '#company' },
  ],
  solutions: [
    { name: 'Proof of Ownership', href: '#solutions' },
    { name: 'Proof of Funds', href: '#solutions' },
    { name: 'Proof of Liabilities', href: '#solutions' },
    { name: 'How It Works', href: '#how-it-works' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'White Paper', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  contact: [
    { name: 'Request Demo', href: 'mailto:demo@peaknode.app?subject=Demo Request' },
    { name: 'Sales Inquiry', href: 'mailto:sales@peaknode.app?subject=Sales Inquiry' },
    { name: 'Early Access', href: 'mailto:early-access@peaknode.app?subject=Early Access Request' },
    { name: 'Support', href: 'mailto:support@peaknode.app?subject=Support Request' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Peaknode" width={96} height={96} />
              <span className="text-xl font-bold">Peaknode</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering financial transparency through verifiable blockchain proof systems. The
              transparency engine for digital finance.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Building Tomorrow's Trust Infrastructure
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Peaknode. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-green-600" />
              <span className="text-muted-foreground">Status:</span>
            </div>
            <span className="text-green-600 font-medium">Development Phase</span>
          </div>
        </div>

        {/* Key Messages */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-1">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Mathematical Certainty</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Independently Verifiable</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Enterprise-Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
