import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
import animate from "tailwindcss-animate";
import colors from 'tailwindcss/colors';

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
				...colors,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'none',
  					color: 'white',
  					a: {
  						color: '#3b82f6',
  						'&:hover': {
  							color: '#60a5fa',
  						},
  					},
  					blockquote: {
  						borderLeftColor: '#3b82f6',
  						color: '#9ca3af',
  					},
  					'h1, h2, h3, h4': {
  						color: 'white',
  					},
  					hr: { borderColor: '#374151' },
  					ol: {
  						li: {
  							'&::marker': {
  								color: '#6b7280',
  							},
  						},
  					},
  					ul: {
  						li: {
  							'&::marker': {
  								color: '#6b7280',
  							},
  						},
  					},
  					strong: { color: 'white' },
  					thead: {
  						borderBottomColor: '#374151',
  					},
  					code: { color: '#e5e7eb' },
  					'blockquote p:first-of-type::before': { content: 'none' },
  					'blockquote p:first-of-type::after': { content: 'none' },
  				},
  			},
  		}
  	}
  },
  plugins: [animate, typography],
} satisfies Config;
