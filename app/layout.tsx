import './globals.scss';
import { Providers } from './providers';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Nerwo simple test frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
