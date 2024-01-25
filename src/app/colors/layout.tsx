"use client"

import { ReactNode, Suspense, useReducer } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <div >
           <main>{children}</main>
        </div>
    );
}
