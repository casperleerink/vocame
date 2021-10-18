//[...media].ts

import {
  mediaHandlerConfig,
  createMediaHandler,
} from 'next-tinacms-cloudinary/dist/handlers'

import { isAuthorized } from '@tinacms/auth'

export const config = mediaHandlerConfig

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
  authorized: async (req, res) => {
    try {
      if (Boolean(
        Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
      )) {
        return true
      }

      const user = await isAuthorized(req)

      return user ? user.verified : false;
    } catch (e) {
      console.error(e)
      return false
    }
  },
})