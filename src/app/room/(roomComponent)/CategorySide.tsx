import style from '@/app/styles/RoomCata.module.scss'
import {
    keywordInterface,
    mtypeInterface,
} from '@/app/result/(roomComponent)/RoomCataSearch'
import CheckList from '@/app/components/catagory_component/CheckList'

interface KeywordsComponentInterface {
    mtypeList: mtypeInterface[]
    keywordList: keywordInterface[][]
    handleAddQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function KeywordsComponent(props: KeywordsComponentInterface) {
    console.log('컴포넌트 만들기 시작')
    return (
        <>
            {props.mtypeList
                ? props.mtypeList.map((mtype, index) => {
                      return (
                          <div className={`${style.roomFilter}`} key={index}>
                              <CheckList
                                  info={{
                                      title: mtype.mtypeName,
                                      isTitle: true,
                                  }}
                                  list={props.keywordList[index]}
                                  onChange={props.handleAddQuery}
                              />
                          </div>
                      )
                  })
                : null}
        </>
    )
}

export default KeywordsComponent
