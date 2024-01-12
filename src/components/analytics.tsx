'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}