import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#f6f8ff',
    black: '#2B3442',
    sectionBackground: '#fefefe',
    blue: '#0079ff',
    blueHover: '#60ABFF',
    logo: '#222731',
    blueGray: '#4B6A9B',
    blueGrayOpacity: 'rgba(75, 106, 155, 0.5)',
    gray: 'rgba(75, 106, 155, 0.75)',
    red: '#f74646'
  },
  container: {
    small: '20.5rem',
    medium: '35.75rem',
    large: '45.625rem'
  },
  font: {
    family: 'Space Mono',
    weight: {
      normal: '400',
      bold: '700'
    }
  },
  sizes: {
    xxsmall: '.8125rem',
    small: '.9375rem',
    medium: '1rem',
    large: '1.375rem',
    xlarge: '1.625rem'
  },
  spacings: {
    xxsmall: '.4375rem',
    xsmall: '.625rem',
    small: '.9375rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
    xxxlarge: '3rem'
  }
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    background: '#141d2f',
    black: '#fff',
    sectionBackground: '#1e2a47',
    blue: '#0079ff',
    blueHover: '#60ABFF',
    logo: '#fff',
    blueGray: '#fff',
    blueGrayOpacity: 'rgba(255, 255, 255, .5)',
    gray: '#fff',
    red: '#f74646'
  }
}
