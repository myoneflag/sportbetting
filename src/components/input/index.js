import * as React from 'react'
import styled from '@emotion/styled'
import {
  Typography,
  Button
} from '@material-ui/core'
import { theme } from '../../helpers'

export const FaText = styled(({ type, color, ...props }) => (
  <Typography {...props} style={{...theme.textStyle[type]}}/>
))`
  ${({ color = 'white' }) => `
    span {
      color: ${theme.colorStyle[color]};
    }
`}`

export const FaButton = styled(({ size, color, ...props }) => (
  <Button {...props}/>
))`
  ${({ color = 'white', size = 'lg' }) => `
    display: block;
    background-color: transparent;
    box-shadow: none;
    background-image: url(${require('../../assets/images/btn-'+color+'.png')});
    background-size: 100% 100%;
    padding: 8px 32px;
    border-radius: 20px;
    min-width: ${size === 'lg'? '500px':'100px'};
    h5 {
      margin: 0;
      font-size: 42px;
      line-height: 1;
      margin-top: 10px;
      font-weight: normal;
      color: ${color === 'red'? theme.colorStyle.yellow:theme.colorStyle.red}
    }
    label {
      margin: 0;
      text-transform: lowercase;
      font-size: 36px;
      color: white;
    }
    &:hover {
      box-shadow: none;
      background-color: transparent;
    }
`}`