/**
 * Projects API Route
 *
 * Handles project creation through Payload CMS.
 *
 * @route POST /api/projects
 * @param {Request} req - The request object containing project data
 * @returns {Promise<Response>} JSON response with created project or error
 */

import { NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload'

export async function POST(req: Request) {
  try {
    const payload = await getPayload()
    const body = await req.json()

    const project = await payload.create({
      collection: 'projects',
      data: {
        name: body.name,
        description: body.description,
        status: body.status,
        startDate: body.startDate,
        endDate: body.endDate,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
