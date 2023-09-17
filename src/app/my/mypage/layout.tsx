import SelectBox from '@/app/components/select/SelectBox'
import PageTop from '@/app/my/mypage/PageTop2'
import Link from 'next/link'

export default function MyLayout(props) {
    return (
        <div className="content">
            <PageTop></PageTop>

            <div className="inner px-[31px] flex gap-4"></div>
            {props.children}
        </div>
    )
}
