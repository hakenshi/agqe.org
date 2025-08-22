import { describe, it, expect, vi } from 'vitest';
import { getAllEvents, getEventBySlug, getAllSponsors, getAllUsers } from '@/actions/events';

// Mock environment
vi.stubEnv('NEXT_PUBLIC_API_URL', 'http://localhost:8000/api');

describe('Public Server Actions Integration Tests', () => {
  it('should get events through server action', async () => {
    const result = await getAllEvents();

    expect(result).toHaveProperty('pastEvents');
    expect(result).toHaveProperty('futureEvents');
    expect(Array.isArray(result.pastEvents)).toBe(true);
    expect(Array.isArray(result.futureEvents)).toBe(true);
  });

  it('should get event by slug through server action', async () => {
    // First get events to find a valid slug
    const events = await getAllEvents();
    const allEvents = [...events.pastEvents, ...events.futureEvents];
    
    if (allEvents.length === 0) return;
    
    const firstEvent = allEvents[0];
    if (!firstEvent.slug) return;

    const event = await getEventBySlug(firstEvent.slug);

    expect(event).not.toBeNull();
    if (event) {
      expect(event.slug).toBe(firstEvent.slug);
    }
  });

  it('should get sponsors through server action', async () => {
    const sponsors = await getAllSponsors();

    expect(Array.isArray(sponsors)).toBe(true);
    
    if (sponsors.length > 0) {
      expect(sponsors[0]).toHaveProperty('id');
      expect(sponsors[0]).toHaveProperty('name');
    }
  });

  it('should get users through server action', async () => {
    const users = await getAllUsers();

    expect(Array.isArray(users)).toBe(true);
    
    if (users.length > 0) {
      expect(users[0]).toHaveProperty('id');
      expect(users[0]).toHaveProperty('firstName');
    }
  });

  it('should handle non-existent event slug', async () => {
    const event = await getEventBySlug('non-existent-slug');

    expect(event).toBeNull();
  });
});