import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getBentoChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../bento/utils'
import useBento from './useBento'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const bento = useBento()
  const farms = getFarms(bento)
  const bentoChefContract = getBentoChefContract(bento)
  const wethContact = getWethContract(bento)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            bentoChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [account, bentoChefContract, bento])

  useEffect(() => {
    if (account && bentoChefContract && bento) {
      fetchAllStakedValue()
    }
  }, [account, block, bentoChefContract, setBalance, bento])

  return balances
}

export default useAllStakedValue
