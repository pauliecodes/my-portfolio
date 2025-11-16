import { defineConfig } from 'unocss'
import { presetWind4 } from '@unocss/preset-wind4'

export default defineConfig({
    presets: [
        presetWind4(),
    ],
    theme: {
        font: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif'
            ].join(', ')
        }
    }
})