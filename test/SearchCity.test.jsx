import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter'
import { MemoryRouter } from "react-router-dom";
import {describe, it, expect, beforeEach, afterEach } from 'vitest';
import SearchCity from "../src/components/searchCity/SearchCity";

describe('SearchCity Component', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it('renders search input', () => {
        render(
            <MemoryRouter>
                <SearchCity className="test-class" text="Buscar Ciudad" view="test-view" length="test-length" />
            </MemoryRouter>
        );
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('updates input value on change', () => {
        render(
            <MemoryRouter>
                <SearchCity className="test-class" text="Buscar Ciudad" view="test-view" length="test-length" />
            </MemoryRouter>
        );
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'Madrid' } });
        expect(inputElement.value).toBe('Madrid');
    });

    it('calls the search function on icon click', async () => {
        mock.onPost('http://localhost:3000/api/fetch-city').reply(200, { data: 'mocked response' });

        render(
            <MemoryRouter>
                <SearchCity className="test-class" text="Buscar Ciudad" view="test-view" length="test-length" />
            </MemoryRouter>
        );
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'Madrid' } });

        const searchIcon = screen.getByRole('link');
        fireEvent.click(searchIcon);

        // Verifica que la llamada a la API se realizó correctamente
        await new Promise((resolve) => setTimeout(resolve, 0)); // Espera a que se resuelva el efecto
        expect(mock.history.post.length).toBe(1);
        expect(mock.history.post[0].data).toBe(JSON.stringify({ city: 'Madrid' }));
    });
});