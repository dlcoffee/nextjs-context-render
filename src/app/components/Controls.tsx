'use client'

import { useRouter } from 'next/navigation'

export default function Controls() {
  const router = useRouter()

  async function insertRandomCharacter() {
    const response = await fetch('/api/characters', {
      method: 'POST',
    })

    const data = await response.json()

    console.log(data)

    router.refresh()
  }

  async function reset() {
    await fetch('/api/characters/reset', {
      method: 'POST',
    })

    router.refresh()
  }

  return (
    <div>
      <div>
        <button onClick={insertRandomCharacter}>insert random character</button>
      </div>

      <div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}
