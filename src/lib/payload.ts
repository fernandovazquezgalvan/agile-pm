import { getPayload } from 'payload'
import type { Payload } from 'payload'
import config from '../payload.config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).payload

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).payload = { client: null, promise: null }
}

export async function getPayloadClient(): Promise<Payload> {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing')
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      config,
      // Add importMap if needed
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
