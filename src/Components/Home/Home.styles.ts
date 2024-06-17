import styled from '../../shared/theme/customStyled'
import { flexbox, FlexboxProps, padding, PaddingProps } from 'styled-system'

export const Container = styled('div')<PaddingProps & FlexboxProps>`
  display: flex;
  flex-direction: column;
  ${flexbox};
  ${padding};
`
