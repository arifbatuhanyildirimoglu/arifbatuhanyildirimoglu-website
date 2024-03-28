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

      let links = [];
      for (const k of key as string[]) {
        links.push(convertToAwsLink(k));
      }

      return res.status(200).json({ links });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
