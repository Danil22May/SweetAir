import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Tips from './Tips';

// Mock timer functions using jest
beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('Tips Component', () => {
    const mockItems = [
        { text: 'Tip 1' },
        { text: 'Tip 2' },
        { text: 'Tip 3' },
    ];

    it('renders the component with correct elements', () => {
        render(<Tips items={mockItems} />);
        expect(screen.getByText(/Tip 1/i)).toBeInTheDocument();
    });
});
