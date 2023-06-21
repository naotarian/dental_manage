import { useEffect, useRef, EffectCallback, DependencyList } from 'react'

export const useUpdateEffect = (EffectCallback, DependencyList) => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    return EffectCallback
  }, DependencyList)
}

import { useRef, useEffect, EffectCallback, DependencyList } from 'react'

// 初回の実行がスキップされるuseEffect
export function useUpdateEffect(fn: EffectCallback, deps: DependencyList) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
    } else {
      fn()
    }
  }, deps)
}
