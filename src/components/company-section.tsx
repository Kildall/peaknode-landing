'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Clock, Eye, Rocket, Target, Users } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    icon: Eye,
    title: 'Transparency First',
    description:
      'We believe radical transparency builds stronger markets. Every proof we generate is independently verifiable and we operate with complete openness about our methodologies.',
  },
  {
    icon: Target,
    title: 'Technical Excellence',
    description:
      'Precision in cryptographic proofs is non-negotiable. We maintain the highest standards in blockchain verification and innovation drives everything we build.',
  },
  {
    icon: CheckCircle,
    title: 'Trust Through Verification',
    description:
      "\"Don't trust, verify\" isn't just a motto—it's our foundation. We enable others to prove what they claim with mathematical certainty over promises.",
  },
  {
    icon: Users,
    title: 'Accessibility',
    description:
      "Enterprise-grade security shouldn't require enterprise resources. We make sophisticated proof systems available to smaller players, democratizing financial transparency.",
  },
];

const milestones = [
  {
    title: 'Core cryptographic protocols developed',
    status: 'completed',
    progress: 100,
    icon: CheckCircle,
    date: 'Q2 2025',
  },
  {
    title: 'Initial proof-of-concept completed',
    status: 'in-progress',
    progress: 25,
    icon: CheckCircle,
    date: 'Q3 2025',
  },
  {
    title: 'Beta testing with select partners',
    status: 'planned',
    progress: 0,
    icon: Clock,
    date: 'Q4 2025',
  },
  {
    title: 'Public launch',
    status: 'planned',
    progress: 0,
    icon: Rocket,
    date: 'Q1 2026',
  },
  {
    title: 'Enterprise partnerships',
    status: 'planned',
    progress: 0,
    icon: Users,
    date: 'Q2 2026',
  },
];

export function CompanySection() {
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
    <section id="company" className="py-12 sm:py-16">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          {/* Mission & Vision */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <Badge variant="outline" className="mb-4">
              Our Company
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
              Building Tomorrow's Trust Infrastructure
            </h2>

            <div className="grid gap-8 lg:grid-cols-2 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Empowering financial transparency through verifiable blockchain proof systems"
                  </p>
                  <p className="text-sm">
                    Peaknode exists to bridge the trust gap in digital finance by providing
                    institutional-grade proof-of-reserves solutions that enable small exchanges and
                    financial companies to demonstrate solvency with mathematical certainty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "To become the global standard for blockchain transparency, where every digital
                    asset can be verified, trusted, and accountable"
                  </p>
                  <p className="text-sm">
                    By 2030, Peaknode envisions a financial ecosystem where proof-of-reserves is as
                    fundamental as traditional auditing, making blockchain-based finance safer and
                    more trustworthy for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="flex gap-4 p-6 rounded-lg border bg-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Positioning */}
          <motion.div variants={itemVariants} className="mb-20">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5">
              <CardHeader>
                <CardTitle className="text-center">Strategic Positioning</CardTitle>
                <CardDescription className="text-center text-lg">
                  "The Transparency Engine for Digital Finance"
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Peaknode transforms blockchain opacity into crystal-clear financial
                  accountability, enabling smaller exchanges and financial companies to compete with
                  larger institutions by proving their solvency with the same rigor as traditional
                  banks. We position ourselves as the essential infrastructure layer between
                  blockchain assets and financial credibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Development Roadmap */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">Development Progress</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      milestone.status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : milestone.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <milestone.icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            milestone.status === 'completed'
                              ? 'default'
                              : milestone.status === 'in-progress'
                                ? 'secondary'
                                : 'outline'
                          }
                        >
                          {milestone.status === 'completed'
                            ? '✅ Completed'
                            : milestone.status === 'in-progress'
                              ? '🔄 In Progress'
                              : '📅 Planned'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{milestone.date}</span>
                      </div>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-blue-600/10"
            >
              <h4 className="font-semibold mb-2">Current Status</h4>
              <p className="text-muted-foreground">
                Peaknode is in development, with core cryptographic protocols tested and initial
                partnerships being established. We&apos;re moving from concept to market-ready
                solution.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
