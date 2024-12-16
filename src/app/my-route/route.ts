import configPromise from '@payload-config'
import { getPayloadClient } from '@/lib/payload'

export const GET = async () => {
  const payload = await getPayloadClient()

  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}
