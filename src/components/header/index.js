import React from 'react'
import { css, jsx } from '@emotion/core'

const Header = () => (
    <header
        css={css`
          height: 100vh;
        `}
    >
        <h1>Starsurge Labs</h1>
        <p>O início de seu novo projeto, começa aqui!</p>
    </header>
)

export default Header