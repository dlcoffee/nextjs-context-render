'use client'

import { useCharacter } from '../context'

export default function Display() {
  const { characters } = useCharacter()

  return (
    <ul>
      {characters.map((char, index) => {
        return <li key={index}>{char}</li>
      })}
    </ul>
  )
}
