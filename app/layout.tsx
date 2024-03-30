import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://personal-portfolio-five-rosy.vercel.app/"),
  icons: {
    icon: '/B.png', // /public path
  },
	title: {
		template: "%s | Bhavya Shah",
		default: "Bhavya Shah",
	},
	authors: {
		name: "Bhavya Shah",
	},

	description:
		"",
	openGraph: {
		title: "Bhavya Shah",
		description:
			"",
		url: "https://personal-portfolio-five-rosy.vercel.app/",
		siteName: "bhavya shah",
		images: "./og.png",
		type: "website",
	},
	keywords: ["personal portfolio", "bhavya shah", "software developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
