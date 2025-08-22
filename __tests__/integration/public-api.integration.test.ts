import { describe, it, expect } from 'vitest';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

describe('Public API Integration Tests', () => {
  it('should get all events', async () => {
    const response = await fetch(`${API_URL}/events`);

    expect(response.ok).toBe(true);
    
    const events = await response.json();
    expect(Array.isArray(events)).toBe(true);
    
    if (events.length > 0) {
      const event = events[0];
      expect(event).toHaveProperty('id');
      expect(event).toHaveProperty('name');
      expect(event).toHaveProperty('coverImage');
      expect(event).toHaveProperty('eventType');
    }
  });

  it('should get all sponsors', async () => {
    const response = await fetch(`${API_URL}/sponsors`);

    expect(response.ok).toBe(true);
    
    const sponsors = await response.json();
    expect(Array.isArray(sponsors)).toBe(true);
    
    if (sponsors.length > 0) {
      const sponsor = sponsors[0];
      expect(sponsor).toHaveProperty('id');
      expect(sponsor).toHaveProperty('name');
      expect(sponsor).toHaveProperty('logo');
      expect(sponsor).toHaveProperty('website');
    }
  });

  it('should get all users', async () => {
    const response = await fetch(`${API_URL}/users`);

    expect(response.ok).toBe(true);
    
    const users = await response.json();
    expect(Array.isArray(users)).toBe(true);
    
    if (users.length > 0) {
      const user = users[0];
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('firstName');
      expect(user).toHaveProperty('secondName');
      expect(user).toHaveProperty('occupation');
    }
  });

  it('should get event by slug', async () => {
    // First get all events to find a slug
    const eventsResponse = await fetch(`${API_URL}/events`);
    const events = await eventsResponse.json();
    
    if (events.length === 0) return;
    
    const firstEvent = events[0];
    if (!firstEvent.slug) return;

    const response = await fetch(`${API_URL}/events/slug/${firstEvent.slug}`);

    expect(response.ok).toBe(true);
    
    const event = await response.json();
    expect(event.slug).toBe(firstEvent.slug);
    expect(event.id).toBe(firstEvent.id);
  });

  it('should handle 404 for non-existent event slug', async () => {
    const response = await fetch(`${API_URL}/events/slug/non-existent-event`);

    expect(response.status).toBe(404);
  });

  it('should handle 404 for non-existent event id', async () => {
    const response = await fetch(`${API_URL}/events/99999`);

    expect(response.status).toBe(404);
  });
});