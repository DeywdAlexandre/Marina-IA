import { createClerkClient } from '@clerk/backend';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, progress } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'userId missing' });
  }

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { progress }
    });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
