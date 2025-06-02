'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Cpu,
  Shield,
  FileCheck,
  Zap,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from './ui/section';

const steps = [
  {
    id: 1,
    icon: Upload,
    title: 'Submit Data',
    description:
      'Upload wallet addresses, transaction data, and liability information through our secure API or dashboard.',
    details:
      'Zero-knowledge submission process ensures your sensitive data never leaves your control while enabling verification.',
    duration: '< 1 min',
    badgeColor: 'bg-blue-500 text-white hover:bg-blue-600',
  },
  {
    id: 2,
    icon: Cpu,
    title: 'Cryptographic Processing',
    description:
      'Our advanced algorithms generate mathematical proofs without exposing private keys or sensitive information.',
    details:
      'Using cutting-edge zero-knowledge cryptography and Merkle tree structures for tamper-proof verification.',
    duration: '2-5 min',
    badgeColor: 'bg-purple-500 text-white hover:bg-purple-600',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Proof Generation',
    description:
      'Create independently verifiable proofs of ownership, funds, and liabilities with mathematical certainty.',
    details:
      'Each proof is cryptographically signed and can be verified by any third party without accessing raw data.',
    duration: '< 30 sec',
    badgeColor: 'bg-emerald-500 text-white hover:bg-emerald-600',
  },
  {
    id: 4,
    icon: FileCheck,
    title: 'Verification & Publishing',
    description:
      'Publish proofs to immutable storage and provide verification tools for auditors and stakeholders.',
    details:
      'Proofs are timestamped, immutable, and include all necessary data for independent verification.',
    duration: 'Instant',
    badgeColor: 'bg-orange-500 text-white hover:bg-orange-600',
  },
];

const metrics = [
  { label: 'Average Processing Time', value: '< 6 minutes', icon: Clock },
  { label: 'Verification Accuracy', value: '100%', icon: Shield },
  { label: 'Proof Generation Speed', value: '< 30 seconds', icon: Zap },
];

export function HowItWorksSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const renderStepCard = (step: (typeof steps)[number], index: number) => {
    const isSelected = index === selectedIndex;
    return (
      <div className="flex-[0_0_100%] min-w-0 px-4 sm:px-6 lg:px-8" key={step.id}>
        <Card
          className={cn(
            'transition-all duration-300',
            'h-auto min-h-[250px] flex flex-col',
            isSelected && 'shadow-lg',
            'lg:border'
          )}
        >
          <CardHeader className="flex-none">
            <div className="flex items-start space-x-4">
              <div
                className={cn(
                  'shrink-0 rounded-lg p-2 lg:p-3',
                  isSelected ? 'bg-primary/10' : 'bg-muted'
                )}
              >
                <step.icon
                  className={cn(
                    'h-5 w-5 lg:h-6 lg:w-6',
                    isSelected ? 'text-primary' : 'text-muted-foreground'
                  )}
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Badge className={cn('text-xs', isSelected && step.badgeColor)}>
                    Step {step.id}
                  </Badge>
                  <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                    {step.duration}
                  </Badge>
                </div>
                <CardTitle
                  className={cn(
                    'text-base lg:text-lg transition-colors',
                    isSelected && 'text-primary'
                  )}
                >
                  {step.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {step.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden">
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <div className="pl-11 lg:pl-14 h-full">
                    <div className="border-l-2 border-primary/10 pl-4 h-full">
                      <p className="text-sm text-muted-foreground line-clamp-[12]">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Add handler for overview card clicks
  const handleStepSelect = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setSelectedIndex(index);
      }
    },
    [emblaApi]
  );

  // Add this new component for the mobile step selector
  const StepSelector = () => (
    <div className={cn('grid gap-2 mb-6', 'grid-cols-4', 'w-full px-4')}>
      {steps.map((step, index) => (
        <Button
          key={step.id}
          variant="outline"
          size="sm"
          onClick={() => handleStepSelect(index)}
          className={cn(
            'relative h-auto w-full transition-all',
            'hover:bg-accent',
            index === selectedIndex && 'border-primary',
            'flex flex-col items-center justify-center p-2 gap-1.5',
            'sm:flex-row sm:justify-start sm:gap-3 sm:p-3',
            'md:flex-col md:items-center md:p-4',
            'lg:hidden'
          )}
        >
          <div
            className={cn(
              'rounded-full p-2 transition-colors',
              index === selectedIndex ? 'bg-primary/10' : 'bg-muted',
              'sm:shrink-0'
            )}
          >
            <step.icon
              className={cn(
                'h-4 w-4',
                'sm:h-5 sm:w-5',
                index === selectedIndex ? 'text-primary' : 'text-muted-foreground'
              )}
            />
          </div>
          <div
            className={cn(
              'flex flex-col items-center gap-1',
              'sm:items-start sm:flex-1',
              'md:items-center md:text-center'
            )}
          >
            <Badge
              className={cn('text-xs px-2 py-0 h-5', index === selectedIndex && step.badgeColor)}
            >
              Step {step.id}
            </Badge>
            <span
              className={cn(
                'hidden',
                'md:block text-sm font-medium truncate max-w-full',
                index === selectedIndex && 'text-primary'
              )}
            >
              {step.title}
            </span>
            <span className={cn('hidden md:block text-xs text-muted-foreground')}>
              {step.duration}
            </span>
          </div>
          <div
            className={cn(
              'absolute bottom-0 left-0 h-0.5 w-full bg-primary/20',
              'transition-transform duration-300',
              index === selectedIndex ? 'scale-x-100' : 'scale-x-0',
              'origin-left'
            )}
          />
        </Button>
      ))}
    </div>
  );

  return (
    <Section id="how-it-works" className="py-12 sm:py-16 bg-muted/20">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          How It Works
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          From Blockchain Complexity to Financial Clarity
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our streamlined process transforms your digital assets into verifiable proofs that build
          trust with mathematical certainty.
        </p>
      </div>

      {/* Step Overview Grid - Hidden on Mobile */}
      <div className="mb-16 hidden lg:block">
        <h3 className="text-xl font-semibold text-center mb-8">Select a Step to Learn More</h3>
        <div className="grid gap-4 grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              onClick={() => handleStepSelect(index)}
              className={cn(
                'cursor-pointer transition-all duration-300',
                'hover:shadow-lg hover:-translate-y-1',
                'relative overflow-hidden group',
                index === selectedIndex && 'ring-2 ring-primary/10'
              )}
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      'mb-3 rounded-lg p-3',
                      'transition-colors duration-300',
                      index === selectedIndex ? 'bg-primary/10' : 'bg-muted'
                    )}
                  >
                    <step.icon
                      className={cn(
                        'h-6 w-6',
                        index === selectedIndex ? 'text-primary' : 'text-muted-foreground'
                      )}
                    />
                  </div>
                  <Badge className={cn('mb-2', index === selectedIndex && step.badgeColor)}>
                    Step {step.id}
                  </Badge>
                  <h4
                    className={cn(
                      'font-semibold text-sm mb-1',
                      index === selectedIndex && 'text-primary'
                    )}
                  >
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{step.duration}</p>

                  {/* Progress indicator */}
                  <div
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 w-full bg-primary/20',
                      'transition-transform duration-300',
                      index === selectedIndex ? 'scale-x-100' : 'scale-x-0',
                      'origin-left'
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile Step Selector */}
      <StepSelector />

      {/* Carousel section */}
      <div className="relative mb-12">
        <div className={cn('overflow-hidden rounded-lg', 'lg:border lg:bg-card')} ref={emblaRef}>
          <div className="flex py-6">{steps.map((step, index) => renderStepCard(step, index))}</div>
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        <div className="hidden lg:block">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                'h-8 w-8 rounded-full bg-background',
                !canScrollPrev && 'opacity-50 cursor-not-allowed'
              )}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous step</span>
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                'h-8 w-8 rounded-full bg-background',
                !canScrollNext && 'opacity-50 cursor-not-allowed'
              )}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next step</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-8">Performance Metrics</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <metric.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical Excellence Callout */}
      <div className="mt-16 rounded-lg border bg-gradient-to-r from-primary/5 to-blue-600/5 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Mathematical Certainty, Not Promises</h3>
            <p className="text-muted-foreground">
              Every proof we generate uses advanced cryptographic techniques including
              zero-knowledge proofs, Merkle trees, and digital signatures. The result? Verification
              that's mathematically guaranteed, not dependent on trust.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
