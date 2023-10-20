import { promises as fs } from 'fs'

export async function POST() {
	await fs.writeFile(process.cwd() + '/src/db.json', JSON.stringify([]), 'utf-8')

	return Response.json({ success: true })
}
