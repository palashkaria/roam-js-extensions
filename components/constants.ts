export const FLOSS_API_URL = process.env.NEXT_PUBLIC_FLOSS_API_URL;
export const API_URL = `https://${process.env.NEXT_PUBLIC_REST_API_ID}.execute-api.us-east-1.amazonaws.com/production`;
export type QueueItemResponse = {
  total: number;
  name: string;
  description: string;
  htmlUrl: string;
};
