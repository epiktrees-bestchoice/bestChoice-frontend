import React from 'react'
import PageTop from '@/app/layout/pageTop/page'

const Mylayout = (props) => {
    return (
        <div className="content">
            <PageTop title={props.params.id} />
            {props.children}
        </div>
    )
}

export default Mylayout
