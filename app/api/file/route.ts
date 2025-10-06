import { readFile } from 'node:fs/promises'
import path from 'path'

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), 'public', 'jonathan_mooney_resume.pdf'),
  )
  const headers = new Headers()
  headers.append(
    'Content-Disposition',
    'attachment; filename="jonathan_mooney_resume.pdf"',
  )
  headers.append('Content-Type', 'application/pdf')

  return new Response(buffer, {
    headers,
  })
}
