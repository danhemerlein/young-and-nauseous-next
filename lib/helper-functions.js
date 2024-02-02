/**
  @description - validates emails, used for account creation and login
  * @param {string} ex: "test@test"
  * @return {boolean} ex. false
*/
export const validateEmail = (email) => {
  const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return expression.test(email)
}
