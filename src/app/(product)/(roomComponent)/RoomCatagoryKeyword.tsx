import style from '@/app/styles/RoomCata.module.scss'
import {
    keywordInterface,
    mtypeInterface,
} from '@/app/(product)/(roomComponent)/RoomCata'
import CheckList from '@/app/components/catagory/CheckList'

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
                      console.log(index + '번째 mtpye!')
                      console.log(mtype)
                      return (
                          <div
                              key={mtype.mtypeId}
                              className={`${style.roomFilter}`}>
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
