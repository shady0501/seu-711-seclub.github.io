/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Primary colors (based on logo deep green)
				primary: {
					50: '#E8F4EF',
					100: '#C2E4D5',
					500: '#2C6B4F',
					600: '#235740',
					900: '#1A3D2E',
				},
				// Accent colors (based on logo orange-red gradient)
				accent: {
					50: '#FFEBE5',
					100: '#FFCFC2',
					orange: '#F37A3A',
					red: '#E53935',
					dark: '#C62828',
				},
				// Neutral colors (cool gray with 5% blue saturation)
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					500: '#A3A3A3',
					700: '#404040',
					900: '#171717',
				},
				// Background system
				background: {
					gradient: 'linear-gradient(135deg, #E8EAF0 0%, #F4F5F9 50%, #FAFBFF 100%)',
					surface: '#FFFFFF',
					glass: 'rgba(255, 255, 255, 0.4)',
				},
				// Semantic colors
				semantic: {
					success: '#22C55E',
					warning: '#F59E0B',
					error: '#EF4444',
					info: '#3B82F6',
				},
				// Legacy colors for compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				secondary: {
					DEFAULT: '#4A90E2',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontFamily: {
				primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
				mono: ['Fira Code', 'Consolas', 'monospace'],
			},
			fontSize: {
				hero: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'h2': ['32px', { lineHeight: '1.3' }],
				'h3': ['24px', { lineHeight: '1.4' }],
				'body-lg': ['20px', { lineHeight: '1.6' }],
				'body': ['16px', { lineHeight: '1.6' }],
				'small': ['14px', { lineHeight: '1.5' }],
				'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},
			spacing: {
				'2': '8px',
				'3': '12px',
				'4': '16px',
				'6': '24px',
				'8': '32px',
				'12': '48px',
				'16': '64px',
				'24': '96px',
				'32': '128px',
			},
			borderRadius: {
				sm: '8px',
				md: '12px',
				lg: '16px',
				xl: '24px',
				full: '9999px',
			},
			boxShadow: {
				sm: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
				md: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
				lg: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
				xl: '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
				glass: '0 8px 32px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)',
				'glass-hover': '0 12px 40px rgba(0,0,0,0.12), 0 6px 20px rgba(0,0,0,0.08)',
			},
			backdropBlur: {
				glass: '20px',
				'glass-strong': '25px',
			},
			animation: {
				'fade-in': 'fadeIn 400ms ease-out',
				'slide-up': 'slideUp 300ms ease-out',
				'card-hover': 'cardHover 300ms ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				cardHover: {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-4px) scale(1.02)' },
				},
			},
			transitionDuration: {
				'fast': '200ms',
				'normal': '300ms',
				'slow': '400ms',
			},
			transitionTimingFunction: {
				'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
				'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}