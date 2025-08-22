import { getAllSponsors } from '@/actions/sponsors';
import { vi } from 'vitest';

global.fetch = vi.fn();

describe('Sponsor Actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllSponsors', () => {
    it('should fetch all sponsors', async () => {
      const mockSponsors = [{ id: 1, name: 'Test Sponsor' }];

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSponsors
      } as Response);

      const result = await getAllSponsors();

      expect(result).toEqual(mockSponsors);
    });

    it('should handle fetch error', async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

      const result = await getAllSponsors();

      expect(result).toEqual([]);
    });
  });
});