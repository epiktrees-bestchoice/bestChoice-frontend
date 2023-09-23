import React from 'react'
import PageTop from '@/app/layout/pageTop/page'
import RouteGuard from '@/app/layout/RouteGuard'

const Mylayout = (props) => {
    return (
        <RouteGuard>
            <div className="content">
                <PageTop title="내정보" />
                {props.children}
            </div>
        </RouteGuard>
    )
}

export default Mylayout
