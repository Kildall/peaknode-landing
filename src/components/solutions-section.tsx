'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Eye, Lock, CheckCircle, Zap, Globe, Users } from 'lucide-react';

const solutions = [
  {
    id: 'ownership',
    icon: Shield,
    title: 'Proof of Ownership',
    subtitle: 'Your Keys, Your Proof',
    description:
      'Cryptographically demonstrate control over wallet addresses without revealing private keys or compromising security.',
    features: ['No private key exposure', 'Real-time verification'],
    color: 'text-blue-600',
  },
  {
    id: 'funds',
    icon: Eye,
    title: 'Proof of Funds',
    subtitle: 'Real Numbers, Real Time',
    description:
      'Capture precise asset balances at specific moments with tamper-proof blockchain verification.',
    features: [
      'Atomic balance snapshots',
      'Multi-chain asset aggregation',
      'Historical proof generation',
      'Merkle tree verification',
    ],
    color: 'text-green-600',
  },
  {
    id: 'liabilities',
    icon: Lock,
    title: 'Proof of Liabilities',
    subtitle: 'Complete Picture, Clear Ratio',
    description:
      'Aggregate and verify total obligations to calculate true collateral ratios and solvency metrics.',
    features: [
      'Privacy-preserving liability proofs',
      'Automated solvency calculations',
      'Compliance-ready reporting',
      'Audit trail generation',
    ],
    color: 'text-purple-600',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Technical Excellence',
    description:
      'Precision in cryptographic proofs is non-negotiable. We maintain the highest standards in blockchain verification.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description:
      "Enterprise-grade security shouldn't require enterprise resources. We democratize financial transparency.",
  },
  {
    icon: Users,
    title: 'Trust Through Verification',
    description:
      "\"Don't trust, verify\" isn't just a motto—it's our foundation. Mathematical certainty over promises.",
  },
];

export function SolutionsSection() {
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
    <section id="solutions" className="pt-12 pb-4 sm:py-16">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4">
              Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Gateway to Provable Financial Transparency
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              When "Trust Me" isn't enough, mathematics speaks. Our three-pillar verification system
              delivers institutional-grade proof-of-reserves without institutional complexity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <Tabs defaultValue="ownership" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {solutions.map((solution) => (
                  <TabsTrigger
                    key={solution.id}
                    value={solution.id}
                    className="flex items-center gap-2"
                  >
                    <solution.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{solution.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {solutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-8">
                  <Card className="text-left">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${solution.color}`}
                        >
                          <solution.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{solution.title}</CardTitle>
                          <CardDescription className="text-base font-medium">
                            {solution.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{solution.description}</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold mb-8">Built on Uncompromising Values</h3>
            <div className="grid gap-8 sm:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Message */}
          <motion.div
            variants={itemVariants}
            className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-blue-600/10 p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-2">The Transparency Engine for Digital Finance</h3>
            <p className="text-muted-foreground">
              We position ourselves as the essential infrastructure layer between blockchain assets
              and financial credibility—the bridge that transforms complex cryptographic proofs into
              simple, verifiable trust.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
