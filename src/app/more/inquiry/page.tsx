'use client'
// 1:1 문의
import React, { useState } from 'react'
import MyInqury from '@/app/more/inquiry/myInquiry'
import NewInqury from '@/app/more/inquiry/newInquiry'
import Tabs from '@/app/components/tabs/Tabs'

import style from '@/app/more/more.module.scss'

function Inquiry() {
    const [selectedIdx, setSelectedIdx] = useState(0)
    const items = [
        { text: '나의 문의 내역', name: 'Content 1' },
        { text: '새 문의 작성', name: 'Content 2' },
    ]

    const handleItemClick = (index: number) => {
        setSelectedIdx(index)
    }

    return (
        <>
            <div className={style.inquiry}>
                <Tabs
                    items={items}
                    selectedIdx={selectedIdx}
                    itemClick={handleItemClick}
                />
                <div className={style.tabContent}>
                    {selectedIdx === 0 ? <MyInqury /> : <NewInqury />}
                </div>
            </div>
        </>
    )
}

export default Inquiry
