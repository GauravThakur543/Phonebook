import { useState } from 'react'
import "./style.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John doe' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleClick = e => {
    e.preventDefault()
    const isPersonExist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (isPersonExist)
    {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const personToAdd = {name : newName}
    setPersons([...persons, personToAdd])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name}</p> )
      }
    </div>
  )
}

export default App