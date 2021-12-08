export const set = (value: string) => {
  window.localStorage.setItem('color_mode', value)
}

export const get = () => {
  const colorMode = window.localStorage.getItem('color_mode')
  return colorMode || 'light'
}
