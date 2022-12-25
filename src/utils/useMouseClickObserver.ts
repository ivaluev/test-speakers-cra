import React, {useEffect, useState} from 'react'
import {MouseEventType} from '../types'

export default function useMouseClickObserver(targetRef: React.RefObject<HTMLElement>) {
  const [mcEvent, setMcEvent] = useState<MouseEventType>(MouseEventType.NONE)

  useEffect(() => {
    if (!targetRef.current) {
      throw new Error('targetRef.current is not set')
    }

    function onMouseDown(this: HTMLElement, e: MouseEvent): any {
      setMcEvent(MouseEventType.DOWN)
    }
    function onMouseUp(this: HTMLElement, e: MouseEvent): any {
      setMcEvent(MouseEventType.UP)
    }

    const targetEl = targetRef.current
    targetEl.addEventListener('mousedown', onMouseDown)
    targetEl.addEventListener('mouseup', onMouseUp)

    return () => {
      targetEl.removeEventListener('mousedown', onMouseDown)
      targetEl.removeEventListener('mouseup', onMouseUp)
    }
  }, []) // eslint-disable-line

  return mcEvent
}
