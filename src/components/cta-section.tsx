'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="demo" className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 to-blue-600/5">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Transform Your Financial Transparency?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the future of blockchain verification. Get early access to institutional-grade
              proof-of-reserves solutions designed for the next generation of digital finance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-3 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Request Demo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See Peaknode in action with a personalized demonstration of our proof-of-reserves
                  platform.
                </p>
                <Button className="w-full group" asChild>
                  <Link href="mailto:demo@peaknode.app?subject=Demo Request">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Contact Sales</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our team about enterprise solutions and partnership opportunities.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="mailto:sales@peaknode.app?subject=Sales Inquiry">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Early Access</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Be among the first to experience Peaknode when we launch in Q3 2025.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="mailto:early-access@peaknode.app?subject=Early Access Request">
                    Join Waitlist
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-lg border bg-card p-8">
            <h3 className="text-xl font-bold mb-4">Why Choose Peaknode?</h3>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Mathematical Certainty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <span>Accessible for All Sizes</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
