import PageTop from '@/app/layout/pageTop/page'
import React from 'react'

const MoreLayout = (props) => {
    return (
        <div className="content">
            <PageTop title={props.params.id} />
            {props.children}
        </div>
    )
}

export default MoreLayout
