/**
  @description - validates emails, used for account creation and login
  * @param {string} email: "test@test"
  * @return {boolean} ex. false
*/
export const validateEmail = (email) => {
  const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return expression.test(email)
}

/**
  @description - returns a random element from an array
  * @param {array} arr: ex. [1, 2, 3, 4, 5]
  * @return {any} ex. [4]
*/
export const getRandomElement = (arr) => {
  if (arr.length === 0) {
    return undefined
  }

  const randomIndex = Math.floor(Math.random() * arr.length)

  return arr[randomIndex]
}

export const moods = [
  'Joyful',
  'Inspired',
  'Playful',
  'Energetic',
  'Curious',
  'Optimistic',
  'Imaginative',
  'Motivated',
  'Passionate',
  'Enthusiastic',
  'Empowered',
  'Content',
  'Confident',
  'Hopeful',
  'Whimsical',
  'Blissful',
  'Grateful',
  'Amused',
  'Radiant',
  'Lighthearted',
]
