import type { NextPage } from 'next'
import { Usecase } from '../../usecases/sample.usecase'

const New: NextPage = () => {
  const usecase = new Usecase()

  const onClick = () => {
    usecase.exportLog()
  }
  return (
    <div>
      これはサンプルページのnewページなんだで
      <button onClick={onClick}>牡丹</button>
    </div>
  )
}

export default New
