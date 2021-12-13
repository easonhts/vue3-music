
export const computedPlayCount = (count: number) => {
  if (count < 100000) {
    return count
  } else {
    return Math.floor(count / 10000)
  }
}
