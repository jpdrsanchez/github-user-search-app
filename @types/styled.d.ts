import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      blueHover: string
      background: string
      sectionBackground: string
      logo: string
      gray: string
      black: string
      blueGray: string
      blueGrayOpacity: string
      red: string
    }
    container: {
      small: string
      medium: string
      large: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    }
    sizes: {
      xxsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    font: {
      family: string
      weight: {
        normal: string
        bold: string
      }
    }
  }
}
