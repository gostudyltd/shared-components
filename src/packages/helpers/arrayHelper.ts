export const getRandomArrayElements = <T>(array: T[], numElements: number): T[] => {
  const shuffled = array.slice()
  let currentIndex = array.length
  let temporaryValue: T
  let randomIndex: number

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = shuffled[currentIndex]
    shuffled[currentIndex] = shuffled[randomIndex]
    shuffled[randomIndex] = temporaryValue
  }

  return shuffled.slice(0, numElements)
}
