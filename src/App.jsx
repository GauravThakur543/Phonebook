import { useState } from 'react'
import "./style.css"
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John doe', number: '1234567890', id: 1 },
    { name: 'Jane doe', number: '1234554321', id: 2 },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [search , setSearch] = useState('')
  const [filteredPhonebook , setFilteredPhonebook] = useState([])

  const handleClick = e => {
    e.preventDefault()
    const isPersonExist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (isPersonExist)
    {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const personToAdd = {name : newName, number: newNumber, id:persons.length + 1}
    setPersons([...persons, personToAdd])
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = e => {
    const searchQuery = e.target.value
    setSearch(searchQuery)
    const filtered = persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredPhonebook(filtered)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} filteredPhonebook={filteredPhonebook} />
      <Form newName={newName} setNewName={setNewName} newNUmber={newNumber} setNewNumber={setNewNumber} handleClick={handleClick}/>
      <h2>Numbers</h2>
      <Persons phonebook={persons} />
    </div>
  )
}

export default App