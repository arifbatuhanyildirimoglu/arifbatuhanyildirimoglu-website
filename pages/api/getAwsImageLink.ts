import { convertToAwsLink } from '@/utils/convertToAwsLink';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === 'GET') {
    try {
      let { key } = req.query;

      if (!key) {
        return res.status(400).json({ message: 'Bad request' });
      }

      let links = [];
      if (Array.isArray(key)) {
        for (const k of key as string[]) {
          links.push(convertToAwsLink(k));
        }
      } else {
        links.push(convertToAwsLink(key as string));
      }

      return res.status(200).json({ links });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
