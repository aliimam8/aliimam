"use client"

import { ReactNode, Suspense, useReducer } from 'react';
import { reducer, Context, defaultContext } from './Store';

export default function RootLayout({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, defaultContext);

    return (
        <div >
            <Context.Provider value={{ ...state, dispatch }}>
                    <Suspense >
                        <main>{children}</main>
                    </Suspense>
            </Context.Provider>
        </div>
    );
}
