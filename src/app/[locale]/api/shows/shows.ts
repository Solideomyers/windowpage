import { NextApiRequest, NextApiResponse } from 'next';
import { getShows } from '@/app/[locale]/api/shows/services/get-shows';
import { Show } from '@/app/[locale]/api/shows/interfaces/show.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Show[] | { message: string }>
) {
  switch (req.method) {
    case 'GET':
      try {
        const shows: Show[] = await getShows();
        res.status(200).json(shows);
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
