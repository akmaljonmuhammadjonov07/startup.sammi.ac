import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './[lng]/globals.css';
import { ChildProps } from '@/types';
import { ThemeProvider } from '@/components/providers/theme.provider';
import { languages } from '@/i18n/settings';
import { dir } from 'i18next';

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

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }));
}

export const metadata: Metadata = {
	title: 'Startup Praktikum - Next.js',
	description: "Startup Praktikum's - Next.js project",
	icons: { icon: '/AK_DEV.png' },
};

interface Props extends ChildProps {
	params: { lng: string };
}

function RootLayout({ children, params: { lng } }: Props) {
	return (
		<html lang={lng} dir={`${dir(lng)},"rtl"`} suppressHydrationWarning>
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
