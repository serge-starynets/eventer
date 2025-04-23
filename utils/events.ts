// /utils/events.ts
import 'server-only';
import { db } from '@/db/db';
import { and, asc, count, desc, eq, ne, not } from 'drizzle-orm';
import { events, rsvps } from '@/db/schema';
import { delay } from './delay';
import { memoize } from 'nextjs-better-unstable-cache';

export const getEventsForDashboard = memoize(
  async (userId: string) => {
    await delay();

    const data = await db.query.events.findMany({
      where: eq(events.createdById, userId),
      columns: {
        id: true,
        name: true,
        startOn: true,
        status: true,
      },
      with: {
        rsvps: true,
      },
      limit: 10,
      orderBy: [asc(events.startOn)],
    });

    return data ?? [];
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:events'],
    // suppressWarnings: true,
    // log: ['datacache', 'verbose'],
    // logid: 'dashboard:events',
  },
);
