import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SearchCity from './SearchCity';

const mock = new MockAdapter(axios);

describe('SearchCity Component', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('renders the component with correct elements', () => {
        render(
            <Router>
                <SearchCity className="test-class" text="Test Text" view="test-view" length="test-length" />
            </Router>
        );

        expect(screen.getByText('Test Text')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('updates state on input change', () => {
        render(
            <Router>
                <SearchCity className="test-class" text="Test Text" view="test-view" length="test-length" />
            </Router>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New City' } });

        expect(input.value).toBe('New City');
    });

    it('handles search click and makes API call', async () => {
        mock.onPost('http://localhost:3000/api/fetch-city').reply(200, { data: 'test response' });

        render(
            <Router>
                <SearchCity className="test-class" text="Test Text" view="test-view" length="test-length" />
            </Router>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New City' } });

        const searchButton = screen.getByRole('link');
        fireEvent.click(searchButton);
    });
});