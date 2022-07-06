import React from 'react'
import classNames from 'classnames/bind';
import Header from '~/components/Layouts/components/Header'
import Sidebar from '~/components/Layouts/components/Sidebar'

import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}
