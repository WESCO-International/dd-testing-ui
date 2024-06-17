import baseTheme, { maxLayoutWidth } from './baseTheme'
export * from './customStyled'

const theme = {
  ...baseTheme,
  maxLayoutWidth,
}

export default theme

export type ThemeType = typeof theme
