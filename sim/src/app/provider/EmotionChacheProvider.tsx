'use client';

import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import { ReactNode, useState } from 'react';

export default function EmotionCacheProvider({ children }: { children: ReactNode }) {
  const [cache] = useState(createEmotionCache);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
