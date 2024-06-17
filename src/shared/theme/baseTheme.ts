const baseTheme = {
  breakpoints: ['576px', '767px', '992px', '1200px', '1440px', '1920px'],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px', '80px', '96px'],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Roboto", sans-serif',
    montserrat: '"Montserrat", sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 8, 16, 9999, '100%'],
  width: [16, 24, 32, 64, 128, 256],
  heights: [16, 24, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    // Copy Typography

    /**
     * From this point down,
     * review color naming in a more generic way:
     * this way we can replace theme.
     * E.g: Primary: '#0E5AA7', cta: '#EE2527',
     */
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
    silver: '#C4C4C4',
    silverChalice: '#B2B2B2',
    error: '#FEF4F4',
    warning: '#FCF6E7',
    information: '#ECF3FA',
    success: '#F1FAF9',
  },
  gradients: {
    bloodRed: 'radial-gradient(79.55% 79.55% at 39.95% 8.68%, #FF996D 0%, #FF0000 100%), #FF3D3D',
    turquoise: 'linear-gradient(180deg, #10FFC6 0%, #10FFFF 100%)',
    black: 'radial-gradient(79.55% 79.55% at 39.95% 50%, #212127 0%, #000 100%), #000',
    silver: 'linear-gradient(180deg, #F4E7E7 0%, #676060 100%)',
    silverLight: 'linear-gradient(rgb(16, 255, 198) 0%, rgb(16, 255, 255) 100%);',
    red: 'radial-gradient(108.27% 109.66% at 25.81% -21.43%, #FF996D 0%, #FF0000 100%)',
    redText: 'linear-gradient(#FF773C, #FF0000)',
    gold: 'linear-gradient(180deg, #F1C153 0%, #D49F17 100%), linear-gradient(180deg, #F4E7E7 0%, #676060 100%)',
    white: 'rgba(255, 255, 255, 0.4)',
    gray: 'linear-gradient(180deg, #10FFC6 0%, #10FFFF 100%)',
    navyBlue: 'linear-gradient(180deg, #191A32 0%, rgba(25, 26, 50, 0) 100%)',
    yellow: 'linear-gradient(#EFBF58, #BFA259)',
  } as { [key: string]: string },
}

export default baseTheme

export type ThemeType = typeof baseTheme

// Up For discussion
export const maxLayoutWidth = baseTheme.space[3] * 5 + parseFloat(baseTheme.breakpoints[3]) // = 1280px
