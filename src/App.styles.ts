import styled from './shared/theme/customStyled'
import { padding, PaddingProps, textStyle, TextStyleProps, typography, TypographyProps } from 'styled-system'

export const Link = styled('a')<PaddingProps>`
  color: #61dafb;
  ${padding};
`

export const AppHeader = styled('header')`
  background-color: #282c34;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Image = styled('img')`
  height: 40px;
  pointer-events: none;
`
// This is how we can use style-system to add variable style
export const Text = styled('span')<PaddingProps & TextStyleProps & TypographyProps>`
  font-family: 'Helvetica';
  ${padding};
  ${textStyle};
  ${typography};
`
