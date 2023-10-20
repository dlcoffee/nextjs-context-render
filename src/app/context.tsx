'use client'

import { createContext, useContext, ReactNode } from 'react'

export type CharacterContext = { characters: string[] }
const CharacterContext = createContext<CharacterContext>({ characters: [] })

function CharacterProvider({
  children,
  value,
}: {
  children: ReactNode
  value: { characters: string[] }
}) {
  return (
    <CharacterContext.Provider value={{ characters: value.characters }}>
      {children}
    </CharacterContext.Provider>
  )
}

function useCharacter() {
  const context = useContext(CharacterContext)

  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider')
  }
  return context
}

export { CharacterProvider, useCharacter }
