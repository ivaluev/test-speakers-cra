import {useEffect, useRef} from 'react'

export default function useIntObserver(
  rootRef: React.MutableRefObject<HTMLDivElement>,
  handleIntersection: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void
) {
  const observer = useRef<IntersectionObserver | null>(null)

  function observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    console.log('observer callback for entires count: ' + entries.length)
    console.log(
      'any in?',
      entries.some(e => e.isIntersecting)
    )
  }

  /**
   * Direct Selection Case
   *
   * useMousePressedMonitor
   * mousedown - wait 50ms - fire pressed=true -> show drawing shield
   * mouseup - fire pressed=false -> remove drawing shield
   *
   * while keydown
   * mousemove - fire rectInfo -> show area rect (update its dimentions) +
   * - create IntersectionObservable for the rect
   *
   * before anything happens - collect all speakers refs into observable targets array
   * when
   *
   * Shift Selection Case
   * maybe we need selectionRect be a class as we need instanse properties to be used and disposed
   */

  useEffect(() => {
    if (rootRef.current) {
      let rect = rootRef.current
      let options = {
        root: rect,
        rootMargin: '0px',
        threshold: 1.0,
      }
      // here we recieve notes on intersected items
      observer.current = new IntersectionObserver(observerCallback, options)
      // console.log('observer created', rootRef.current.clientWidth, rootRef.current.style.height);

      return () => {
        observer.current?.disconnect()
      }
    }
  }, []) // eslint-disable-line

  return observer
}
