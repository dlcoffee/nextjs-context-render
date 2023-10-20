import { promises as fs } from 'fs'

const LIST = [
  'Monkey D. Luffy',
  'Roronoa Zoro',
  'Nami',
  'Usopp',
  'Sanji',
  'Tony Tony Chopper',
  'Nico Robin',
  'Franky',
  'Brook',
  'Jinbei',
]

export async function GET() {
  const file = await fs.readFile(process.cwd() + '/src/db.json', { encoding: 'utf8' })

  const db = JSON.parse(file) as string[]

  return Response.json({ db })
}

export async function POST() {
  const file = await fs.readFile(process.cwd() + '/src/db.json', { encoding: 'utf8' })

  let db = JSON.parse(file) as string[]

  const character = LIST[Math.floor(Math.random() * LIST.length)]
  db.push(character)

  await fs.writeFile(process.cwd() + '/src/db.json', JSON.stringify(db), 'utf-8')

  return Response.json({ inserted: character })
}
