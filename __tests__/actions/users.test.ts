import { getAllUsers } from '@/actions/users';
import { vi } from 'vitest';

global.fetch = vi.fn();

describe('User Actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should fetch all users', async () => {
      const mockUsers = [{ id: 1, firstName: 'John' }];

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockUsers
      } as Response);

      const result = await getAllUsers();

      expect(result).toEqual(mockUsers);
    });

    it('should handle fetch error', async () => {
      vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

      const result = await getAllUsers();

      expect(result).toEqual([]);
    });
  });
});