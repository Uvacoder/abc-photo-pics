
export const formatTextToUrl = (text) => {
  let t = text.toLowerCase()
  return t.split(' ').join('-')
}