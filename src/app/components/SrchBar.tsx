import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import style from '@/app/layout/header/header.module.scss'
import Link from 'next/link'

const SearchBar = ({ srchBarOpen, onInputSearch, handleSrchBar }) => {
    const handleEnterPress = (event) => {
        if (event.key === 'Enter' && event.target.value != '') {
            const searchText = event.target.value
            console.log(searchText) // 입력된 텍스트를 콘솔에 출력
            onInputSearch(searchText)
            event.target.value = ''
        }
    }
    return (
        <div className={style.srchBar}>
            <div className={style.srchBarWrap}>
                <input
                    type="text"
                    id="keyword"
                    placeholder="지역, 숙소명"
                    autoComplete="off"
                    onKeyUp={handleEnterPress}
                />
                <button type="button" className={style.btnSrch}>
                    <SearchIcon className={style.btnSrchIcon} />
                    <span className="blind">검색</span>
                </button>
            </div>
            <button className={style.btnCancel}>
                <CloseIcon
                    className={style.btnCancelIcon}
                    onClick={() => handleSrchBar(srchBarOpen)}
                />
                <span className="blind">닫기</span>
            </button>
        </div>
    )
}

export default SearchBar
