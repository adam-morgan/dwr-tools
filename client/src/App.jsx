import React from 'react';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Home from './perspectives/home/Home';
import AnalyzeRomPerspective from './perspectives/analyze/AnalyzeRomPerspective';

import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/analyze',
        element: <AnalyzeRomPerspective />
    },
    {
        path: '*',
        element: (
            <div className="app-error">Error: unknown path.</div>
        )
    }
]);

const App = () => {
    return (
        <div className="app">
            <a href="/">
                <header className="app-header">
                    <img alt="DWR Tools" src="/api/sprites/monsters/dragonlord_2" />
                    Dragon Warrior Randomizer Tools
                </header>
            </a>
            <main className="app-main">
                <RouterProvider router={router} />
            </main>
        </div>
    );
};

export default App;
