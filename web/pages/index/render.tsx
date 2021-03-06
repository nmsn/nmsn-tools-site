import React, { useState, useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import Title from '@/components/title'
import Switch from '@/components/switch'
import Board from '@/components/board'
import HistoryToday from '../historyToday'
import RSS from '../rss'
import styles from './index.module.less'
import Skeleton from '@/components/skeleton'

export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)

  const [step, setStep] = useState(0)

  const onChange = (key: number) => {
    console.log(key)
    setStep(key)
  }

  return (
    <div className={styles.container}>
      <Title style={{ margin: '20px 0' }}>NMSN</Title>
      <div className={styles.content}>
        <Board>
          <>
            {step === 0 ? <HistoryToday /> : undefined}
            {step === 1 ? <RSS /> : undefined}
            {step === 2 ? (
              <Skeleton cardStyle={{ height: 77, width: 475 }} />
            ) : undefined}
          </>
        </Board>
      </div>
      <div className={styles.footer}>
        <Switch onChange={onChange} num={5} />
      </div>
    </div>
  )
}
