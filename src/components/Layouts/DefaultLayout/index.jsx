import React from 'react'
import Header from '~/components/Layouts/components/Header'
import Sidebar from '~/components/Layouts/components/Sidebar'


export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
