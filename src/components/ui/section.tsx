import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: ReactNode;
}

export function Section({
  children,
  className,
  containerClassName,
  background,
  ...props
}: SectionProps) {
  return (
    <section className={cn('relative w-full max-w-screen overflow-hidden', className)} {...props}>
      {/* Background element that can span full width */}
      {background && <div className="absolute inset-0">{background}</div>}

      {/* Content container with max width */}
      <div
        className={cn(
          'container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
