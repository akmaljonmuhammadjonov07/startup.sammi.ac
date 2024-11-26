import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ChildProps } from '@/types';
import { ThemeProvider } from '@/components/providers/theme.provider';

const Roboto = localFont({
	src: './fonts/Roboto-Regular.ttf',
	variable: '--font-roboto',
	weight: '100 900',
});

const SpaceGrotesk = localFont({
	src: './fonts/SpaceGrotesk-VariableFont_wght.ttf',
	variable: '--font-space-grotesk',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Startup Praktikum - Next.js',
	description: "Startup Praktikum's - Next.js project",
	icons: { icon: '/AK_DEV.png' },
};

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${Roboto.variable} ${SpaceGrotesk.variable} overflow-x-hidden antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
