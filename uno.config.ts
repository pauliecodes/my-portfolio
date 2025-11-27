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
        },
        colors: {
            // Brand colors
            primary: {
                DEFAULT: '#000000',
                dark: '#1a1a1a',
                light: '#333333',
            },
            secondary: {
                DEFAULT: '#4a5568',
                dark: '#2d3748',
                light: '#718096',
            },
            accent: {
                DEFAULT: '#dd1188',
                dark: '#059669',
                light: '#34d399',
            },
            // Grays
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            // Semantic colors
            background: '#ffffff',
            text: {
                DEFAULT: '#000000',
                secondary: '#6b7280',
                muted: '#9ca3af',
            }
        }
    }
})