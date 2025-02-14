import { Montserrat, Rubik } from 'next/font/google';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const fontRubik = Rubik({ subsets: ['latin'], display: 'swap', variable: '--font-rubik' });

export { fontMontserrat, fontRubik };
