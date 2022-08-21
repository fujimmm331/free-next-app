import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Sample: NextPage = () => {
  console.log('レンダリング')
  const onClick = () => {
    console.log('onClick')
    if (isEmpty) return
    setCount((sample) => sample - 1)
    if (count <= 1) setIsEmpty(true)
  }

  const [count, setCount] = useState(10)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    console.log('useEffectなり')
  }, [isEmpty])
  return (
    <div>
      <ul>
        <li>リストタグ１</li>
        <li>リストタグ２</li>
      </ul>
      {isEmpty ? <div>おしまい！</div> : <div>カウント：{count}</div>}
      <button onClick={onClick} disabled={isEmpty}>
        牡丹
      </button>
    </div>
  )
}

export default Sample
