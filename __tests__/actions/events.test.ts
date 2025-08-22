import { getAllEvents, getEventBySlug } from '@/actions/events';
import { vi } from 'vitest';

global.fetch = vi.fn();

describe('Event Actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllEvents', () => {
    it('should fetch all events', async () => {
      const mockResponse = {
        pastEvents: [{ id: 1, name: 'Past Event' }],
        futureEvents: [{ id: 2, name: 'Future Event' }]
      };

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      } as Response);

      const result = await getAllEvents();

      expect(result).toEqual(mockResponse);
    });

    it('should handle fetch error', async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

      const result = await getAllEvents();

      expect(result).toEqual({ pastEvents: [], futureEvents: [] });
    });
  });

  describe('getEventBySlug', () => {
    it('should fetch event by slug', async () => {
      const mockEvent = { id: 1, slug: 'test-event' };

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockEvent
      } as Response);

      const result = await getEventBySlug('test-event');

      expect(result).toEqual(mockEvent);
    });

    it('should handle fetch error', async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

      const result = await getEventBySlug('test-event');

      expect(result).toBeNull();
    });
  });
});