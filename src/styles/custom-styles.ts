import { createGlobalStyle } from 'styled-components';

/* istanbul ignore next */
export const CustomStyle = createGlobalStyle<{
  primaryColor?: string;
}>`
  :root {
    --color-theme: ${props => props.primaryColor || '#d1005c'};
    --color-theme-hover: #d1005c80;
    --color-green: #2ec26a;
    --color-blue: #007aff;
    --color-yellow: #f0c330;
    --color-red: #e54d42;
    --color-smoke: #969fa7;
    --color-dark: #212121;
    --color-dark-2: #393839;
    --color-dark-3: #191919;
    --color-light: #e3e8ee;
    --color-white: #fff;
    --color-lightgreen:rgba(180, 254, 210, 1);
    --color-gray-2:rgba(255, 255, 255, 0.1);
    --color-gray-3:rgba(255, 255, 255, 0.2);
    --color-gray:rgba(132, 142, 151, 1);
    --transition-smooth: all 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);
    --transition-smooth-2: all 1.5s cubic-bezier(0.04, 1, 0.6, 0.97);
    --fontSize-h1: 32px;
    --fontSize-h2: 28px;
    --fontSize-h3: 24px;
    --fontSize-h4: 20px;
    --fontSize-h5: 16px;

  }

`;
