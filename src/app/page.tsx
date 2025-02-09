import React from 'react'
import { peopleList } from '@/data/peopleList';


export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">People List</h1>
      {peopleList.length > 0 &&
        <ul>
        {peopleList.map(person => (
          <li key={person.id} className="text-xl">
            {person.name} - {person.professsion}
          </li>
        ))}
        </ul>
      }
    </div>
  )
}
