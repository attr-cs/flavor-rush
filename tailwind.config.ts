
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                
                // Cyberpunk theme colors
                cyber: {
                    black: '#101010',
                    dark: '#181818',
                    charcoal: '#222222',
                    green: '#00ff66',
                    pink: '#ff00a8',
                    orange: '#ff6d00',
                    blue: '#00f0ff',
                    yellow: '#ffbb00',
                },
                
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                // Custom animations
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        opacity: '1',
                        boxShadow: '0 0 15px 5px rgba(0, 240, 255, 0.7)'
                    },
                    '50%': { 
                        opacity: '0.85',
                        boxShadow: '0 0 25px 5px rgba(0, 240, 255, 0.3)'
                    },
                },
                'scale-fade-in': {
                    '0%': { 
                        transform: 'scale(0.9)',
                        opacity: '0'
                    },
                    '100%': { 
                        transform: 'scale(1)',
                        opacity: '1'
                    },
                },
                'glitch': {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-3px, 3px)' },
                    '40%': { transform: 'translate(-3px, -3px)' },
                    '60%': { transform: 'translate(3px, 3px)' },
                    '80%': { transform: 'translate(3px, -3px)' },
                },
                'draw-line': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                'flicker': {
                    '0%, 100%': { opacity: '1' },
                    '20%': { opacity: '0.8' },
                    '22%': { opacity: '0.9' },
                    '40%': { opacity: '0.6' },
                    '42%': { opacity: '0.8' },
                    '60%': { opacity: '0.7' },
                    '80%': { opacity: '1' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'scale-fade-in': 'scale-fade-in 0.5s ease-out',
                'glitch': 'glitch 0.8s ease-in-out infinite',
                'draw-line': 'draw-line 1.5s ease-in-out forwards',
                'flicker': 'flicker 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
