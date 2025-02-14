import { headers } from 'next/headers';

export async function getClientIp(): Promise<string> {
  const headersList = await headers();

  const ip =
    headersList.get('x-forwarded-for') ||
    headersList.get('x-real-ip') ||
    headersList.get('remote-addr') ||
    '127.0.0.1'; // Fallback a localhost

  return ip.split(',')[0].trim();
}
