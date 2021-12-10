import { GetServerSidePropsContext } from 'next'
import nookies, { parseCookies, setCookie } from 'nookies'

export const set = (value: string) => {
  setCookie(null, 'color_mode', value)
}

export const get = (ctx: GetServerSidePropsContext) => {
  const { color_mode } = nookies.get(ctx)
  return color_mode || 'light'
}

export const clientGet = () => {
  const { color_mode } = parseCookies()
  return color_mode
}
