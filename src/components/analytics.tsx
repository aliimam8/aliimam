'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AIAnalytics from '@/components/common/analytics'

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      <AIAnalytics/>
    </>
  );
}