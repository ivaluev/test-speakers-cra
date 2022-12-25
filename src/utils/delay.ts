export async function delay<T>(data: T, delayInMs: number = 1000): Promise<T> {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, data), delayInMs)
  })
}

export async function delayPromise(delayInMs: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, ''), delayInMs)
  })
}
