import "./globals.css";

export const metadata = {
  title: "The Dental Edge | Best Dental Clinic in Nashik",
  description: "At The Dental Edge, we provide simple, honest, and comfortable dental care for every patient. We help you maintain a healthy smile with confidence.",
  icons: {
    icon: "/images/icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link href="/fonts/fontawesome6/css/all.min.css" rel="stylesheet" type="text/css" />
        <link href="/fonts/icofont/icofont.min.css" rel="stylesheet" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
