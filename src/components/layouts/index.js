import * as React from 'react'
import styled from '@emotion/styled'
import {
  Grid,
} from '@material-ui/core'
import { theme } from '../../helpers'

export const FaGrid = styled(({ mx, my, px, py, mpx, mpy, bg, relative, ...props }) => (
  <Grid {...props} />
))`
    ${({ mx, my, px, py, mpx, mpy, bg, relative }) => `
      margin-top: ${my ? my : 0}px;
      margin-bottom: ${my ? my : 0}px;
      margin-left: ${mx ? mx : 0}px;
      margin-right: ${mx ? mx : 0}px;
      padding-top: ${py ? py : 0}px;
      padding-bottom: ${py ? py : 0}px;
      padding-left: ${px ? px : 0}px;
      padding-right: ${px ? px : 0}px;
      background: ${bg ? theme.colorStyle[bg] : ''};
      ${relative? `position: relative;` : null}
      @media only screen and (max-width: 600px) {
        ${mpx ? `
          padding-left: ${mpx}px !important;
          padding-right: ${mpx}px !important;
        ` : null}
        ${mpy ? `
          padding-top: ${mpy}px !important;
          padding-bottom: ${mpy}px !important;
        ` : null}
      }
  `}`