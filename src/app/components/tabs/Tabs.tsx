import React from 'react'
import style from '@/app/components/tabs/tabs.module.scss'
interface Item {
    name: string
    text: string
}

interface TabsProps {
    items: Array<Item>
    selectedIdx: number
    itemClick: (index: number) => void
}
const Tabs = (props: TabsProps) => {
    const { items, selectedIdx, itemClick } = props

    return (
        <div className={style.tab}>
            {items.map((item, index) => (
                <button
                    key={item.name}
                    className={` ${
                        selectedIdx === index
                            ? `${style.tabBtnOn}`
                            : `${style.tabBtn}`
                    }`}
                    onClick={() => itemClick(index)}>
                    {item.text}
                </button>
            ))}
        </div>
    )
}

export default Tabs
