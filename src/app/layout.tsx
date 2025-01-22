import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/assets/logo-main.png" />
      <body className={`antialiased`}>
        <Toaster />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
