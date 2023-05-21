import React from 'react';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Home from './perspectives/home/Home';
import AnalyzeRom from './perspectives/analyze/AnalyzeRom';

import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/analyze',
        element: <AnalyzeRom />
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
                    <img alt="DWR Tools" src="/api/sprites/monsters/dl2" />
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
