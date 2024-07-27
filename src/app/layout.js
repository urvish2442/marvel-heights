import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvel Heights",
  description: "Contacts detail",
  og: {
    title: "Marvel Heights - Contact Details",
    description: "Find all the contact details for Marvel Heights.",
    image: "https://marvel-heights.vercel.app/Logo.jpg", // Replace with the actual image URL
    url: "https://marvel-heights.vercel.app/", // Replace with your actual URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>{metadata.title}</title> */}
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
