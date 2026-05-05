import { createClerkClient } from '@clerk/backend';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await clerkClient.users.getUserList();
    return res.status(200).json({ users: response.data || [] });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
