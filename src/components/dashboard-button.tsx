'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DashboardButton() {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? 'https://app.peaknode.com';

  const handleClick = () => {
    if (dashboardUrl) {
      window.location.href = dashboardUrl;
    }
  };

  return (
    <Button onClick={handleClick} variant="outline">
      <Link href={dashboardUrl}>Dashboard</Link>
    </Button>
  );
}
