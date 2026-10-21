import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

const locales = ['en', 'es', 'pl', 'de'];
const defaultLocale = 'es';

export default function RootPage() {
  // Check cookie first
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    redirect(`/${localeCookie}`);
  }

  // Check Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2).toLowerCase());
    for (const lang of languages) {
      if (locales.includes(lang)) {
        redirect(`/${lang}`);
      }
    }
  }

  redirect(`/${defaultLocale}`);
}
