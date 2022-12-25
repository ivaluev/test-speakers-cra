import {useEffect, useState} from 'react'
import {fromEvent} from 'rxjs'
import {distinctUntilChanged, filter, merge} from 'rxjs/operators'

export const KEY_CODE_SHIFT = 16
export const KEY_CODE_CTRL = 17
export const KEY_CODE_ALT = 18
const modifierKeyCodes = [KEY_CODE_SHIFT, KEY_CODE_CTRL, KEY_CODE_ALT]

export class KeyScope {
  public key: string
  public keyCode: number
  public isModifierKey: boolean
  constructor(ke: KeyboardEvent, public modifiers: number[]) {
    this.key = ke.key
    this.keyCode = ke.keyCode || ke.which
    this.isModifierKey = modifierKeyCodes.includes(ke.keyCode)
  }
}

export default function useKeyPressedMonitor(key: 16 | 17 | 18) {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    // modifierKeyCodes.includes(ke.keyCode || ke.which))
    const filterMofifiers = filter((ke: KeyboardEvent) => key === (ke.keyCode || ke.which))
    const keyDowns = fromEvent<KeyboardEvent>(document, 'keydown').pipe(filterMofifiers)
    const keyUps = fromEvent<KeyboardEvent>(document, 'keyup').pipe(filterMofifiers)

    const merged = keyDowns
      .pipe(
        merge(keyUps),
        distinctUntilChanged((e1: KeyboardEvent, e2: KeyboardEvent) => {
          return e1.type + (e1.key || e1.which) === e2.type + (e2.key || e2.which)
        })
      )
      .subscribe((e: KeyboardEvent) => {
        // console.log(e.type, e.key || e.which);
        if (e.type === 'keydown') {
          setPressed(true)
        } else {
          setPressed(false)
        }
      })

    return () => {
      merged.unsubscribe()
    }
  }, [key])

  return pressed
}
