'use client'

import React, { useEffect, useRef, useState } from 'react'

import ButtonCarousel from '@/app/components/btns/ButtonCarousel'

import style from '@/app/(product)/slide.module.scss'

const RoomDetailSlide = ({ roomDetail }) => {
    const slideRef = useRef(null)
    const slideBigRef = useRef(null)

    useEffect(() => {
        if (roomDetail && slideRef.current) {
            getFirstImage(slideRef.current.children[0].firstChild)
        }
    }, [roomDetail])

    const getFirstImage = (children) => {
        const cloneBig = children.cloneNode(true)
        slideBigRef.current.replaceChildren()
        slideBigRef.current.appendChild(cloneBig)
    }

    const handleMoveSlide = (e) => {
        let slideButton = e.target.parentElement?.className
        let slide = slideRef.current
        let slideChildren = slide.children
        let slidLength = slideChildren.length

        if (slideButton.includes('prev')) {
            slide.prepend(slideChildren[slidLength - 1])
        } else if (slideButton.includes('next')) {
            slide.appendChild(slideChildren[0])
        }

        getFirstImage(slideChildren[0].firstChild)
    }
    return (
        <>
            <div className={style.slideView} ref={slideBigRef}></div>
            <div className={style.slide}>
                <div className={style.slideWrap}>
                    <ul className={style.slideList} ref={slideRef}>
                        <li className={`${style.slideListItem}`}>
                            <img src={roomDetail?.imgUrl} alt="" />
                        </li>
                        <li className={style.slideListItem}>
                            <img src="../../img/no-img.jpg" alt="" />
                        </li>
                        <li className={style.slideListItem}>
                            <img src="../../img/no-img.jpg" alt="" />
                        </li>
                        <li className={style.slideListItem}>
                            <img src="../../img/no-img.jpg" alt="" />
                        </li>
                        <li className={style.slideListItem}>
                            <img src="../../img/no-img.jpg" alt="" />
                        </li>
                    </ul>
                </div>
                <div className={style.slideControls}>
                    <ButtonCarousel
                        prev={true}
                        onClick={(e) => handleMoveSlide(e)}
                    />
                    <ButtonCarousel
                        next={true}
                        onClick={(e) => handleMoveSlide(e)}
                    />
                </div>
            </div>
        </>
    )
}

export default RoomDetailSlide
