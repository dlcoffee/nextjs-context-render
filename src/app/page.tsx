import { promises as fs } from 'fs'

import { CharacterProvider } from './context'
import Display from './components/Display'
import Controls from './components/Controls'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/db.json', { encoding: 'utf8' })

  const db = JSON.parse(file) as string[]

  return (
    <CharacterProvider value={{ characters: db }}>
      <main>
        <div>
          <Controls />
        </div>
        <div>
          <Display />
        </div>
      </main>
    </CharacterProvider>
  )
}
