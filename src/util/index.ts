export async function wait(timer: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, timer))
}

export function* chunks<T>(arr: T[], n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}
