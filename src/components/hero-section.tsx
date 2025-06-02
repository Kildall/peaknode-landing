'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Eye, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section className="pt-12 pb-4 sm:py-16 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <Badge variant="secondary" className="px-4 py-2">
            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Stealth to Launch - Building Tomorrow's Trust Infrastructure
            </span>
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Prove What You Own.{' '}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Verify What You Claim.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
        >
          Transform blockchain complexity into financial clarity. Small exchanges and digital asset
          companies shouldn't struggle to prove their legitimacy. Get bank-grade transparency
          without bank-grade complexity.
        </motion.p>

        {/* Three Pillars */}
        <motion.div variants={itemVariants} className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Shield, title: 'Proof of Ownership', desc: 'Your Keys, Your Proof' },
            { icon: Eye, title: 'Proof of Funds', desc: 'Real Numbers, Real Time' },
            { icon: Lock, title: 'Proof of Liabilities', desc: 'Complete Picture, Clear Ratio' },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardHoverVariants}
              whileHover="hover"
              className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <item.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" className="group" asChild>
            <Link href="#demo">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">Learn How It Works</Link>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="mt-16 border-t pt-8">
          <p className="text-sm text-muted-foreground mb-6">
            Three Proofs. One Truth. Complete Confidence.
          </p>
          <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Cryptographic Verification
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Mathematical Certainty
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              Independent Auditable
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
