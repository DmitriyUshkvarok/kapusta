import './globals.css';
import { Roboto } from 'next/font/google';
import ReduxProvider from '../redux/ReduxProvider/Provider';
import Head from 'next/head';
import Header from '../components/Header/Header';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Kapusta | authentication',
  description: 'Costing application',
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className={roboto.className}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ReduxProvider>
  );
}
