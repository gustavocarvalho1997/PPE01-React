import React from 'react'
import { GeoForm } from '@/components/GeoForm'
import { Person } from '@/components/Person'
import { Card } from '@/components/Card'

export default function Page() {
  return (
    <div>
      <GeoForm />
      <Person 
        name="Calo" 
        legs={2} 
        avatar="https://i.pinimg.com/736x/4d/5c/34/4d5c345462e46789b9d170487d85ccca.jpg"
      />
      <Person 
        name="Jaré" 
        legs={2} 
        avatar="https://pbs.twimg.com/media/EGPHaO9WoAA4vAR.jpg"
      />
      <Person 
        name="Cosmo" 
        legs={2} 
      />
      <Card 
        phrase='Não é o mais forte das espécies que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.'
        author='Charles Darwin'
      />
    </div>
  )
}
