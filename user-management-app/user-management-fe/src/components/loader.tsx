import {styled} from '@mui/system'

export const StyledLoadder = styled('div')(() => ({
  borderRadius: '50%',
  color: '#ffffff',
  width: '10em',
  height: '10em',
  textIndent: '-99999em',
  transform: 'translateZ(0)',
  boxShadow: 'inset 0 0 0 1em',
  ':before': {
    content: "''",
    position: 'absolute',
    width: '5.2em',
    height: '10.2em',
    background: '#ffffff',
    borderRadius: '10.2em 0 0 10.2em',
    top: '-0.1em',
    left: '-0.1em',
    transformOrigin: '5.2em 5.1em',
    animationName: {
      '0%': {
        transform: 'rotate(0deg)',
      },

      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
    animationDelay: '1.5s',
    animationDirection: 'initial',
    animationPlayState: 'initial',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    width: '5.2em',
    height: '10.2em',
    background: '#ffffff',
    borderRadius: '0 10.2em 10.2em 0',
    top: '-0.1em',
    left: '5.1em',
    transformOrigin: '0px 5.1em',
    animationName: {
      '0%': {
        transform: 'rotate(0deg)',
      },

      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease',
    animationDirection: 'initial',
    animationPlayState: 'initial',
  },
}))
