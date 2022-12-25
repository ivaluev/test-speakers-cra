import React, {useCallback, useEffect, useState} from 'react'
import {MouseEventType} from '../types'

export class RectInfo {
  constructor(public x1: number, public y1: number, public x2: number, public y2: number) {}

  get left(): number {
    return Math.min(this.x1, this.x2)
  }
  get top(): number {
    return Math.min(this.y1, this.y2)
  }
  get width(): number {
    return Math.abs(this.x2 - this.x1)
  }
  get height(): number {
    return Math.abs(this.y2 - this.y1)
  }
}

// we can export selection rect instead of info - thus making it uniform to use
export default function useMouseMoveAndDownObserver(targetRef: React.RefObject<HTMLElement>) {
  const [mouseState, setMouseState] = useState<MouseEventType>(MouseEventType.UP)
  const [mouseMovingRect, setMovingRectInfo] = useState(new RectInfo(0, 0, 0, 0))

  const onMouseDown = useCallback((e: MouseEvent): any => {
    // will update onMouseUp useCallback with rect info ->
    setMovingRectInfo(new RectInfo(e.offsetX, e.offsetY, e.offsetX, e.offsetY))
    setMouseState(MouseEventType.DOWN)
    console.log('onMouseDown')
  }, []) // eslint-disable-line

  useEffect(() => {
    if (targetRef.current) {
      const el = targetRef.current
      console.log('adding mousedown listener')
      el.addEventListener('mousedown', onMouseDown)

      return () => {
        console.log('disposing mousedown listener')
        el.removeEventListener('mousedown', onMouseDown)
      }
    }
  }, []) // eslint-disable-line

  const onMouseUp = useCallback(
    (e: MouseEvent): any => {
      console.log('onMouseUp', mouseMovingRect)
      setMouseState(MouseEventType.UP)
    },
    [mouseMovingRect]
  ) // eslint-disable-line

  useEffect(() => {
    // console.log('mousestate effect', mouseState);
    if (mouseState === MouseEventType.DOWN) {
      const el = targetRef.current!
      console.log('adding mouseup listener')
      el.addEventListener('mouseup', onMouseUp)

      return () => {
        console.log('disposing mouseup listener')
        el.removeEventListener('mouseup', onMouseUp)
      }
    }
    // filter down DOWN
  }, [mouseState]) // eslint-disable-line

  const onMouseMove = useCallback(
    (e: MouseEvent): any => {
      // console.log('onMouseMove', mouseMovingRect);
      const currentRectInfo = new RectInfo(
        mouseMovingRect.x1,
        mouseMovingRect.y1,
        e.offsetX,
        e.offsetY
      )
      // console.log('on mouse move', currentRectInfo);
      setMovingRectInfo(currentRectInfo)
    },
    [mouseMovingRect]
  ) // eslint-disable-line

  useEffect(() => {
    if (mouseState === MouseEventType.DOWN) {
      const el = targetRef.current!
      console.log('adding mousemove listener')
      el.addEventListener('mousemove', onMouseMove)
      return () => {
        console.log('disposing mousemove listener')
        el.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [mouseState]) // eslint-disable-line

  return {
    mouseState,
    mouseMovingRect,
  }
}

// function triggerMouseEvent(node: HTMLDivElement, eventType: string): void {
//   const clickEvent = document.createEvent('MouseEvents');
//   clickEvent.initEvent(eventType, true, true);
//   node.dispatchEvent (clickEvent);
// }
