import { useState, useEffect } from 'react'
import "./style.css"
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import phoneBookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [search , setSearch] = useState('')
  const [filteredPhonebook , setFilteredPhonebook] = useState([])

  const handleClick = e => {
    e.preventDefault()
    const isPersonExist = persons.find(person => {
      return person.name.toLowerCase() === newName.toLowerCase()})
    if (isPersonExist)
    { 
      if(isPersonExist.number === newNumber)
      {
        alert(`${newName} is already added to the phonebook`)
        return
      }
      else
      {
        if(window.confirm(`${newName} is already added to the phonebook, replace the old number with new one?`))
        {
          handleUpdateNumber(isPersonExist, newNumber)
          return
        }
      }
    }
    const personToAdd = {
                          name : newName, 
                          number: newNumber
                        }
    phoneBookService
    .create(personToAdd)                   
    .then(res => res.json())
    .then(data => {
      setPersons([...persons, data])
      setNewName('')
      setNewNumber('')
    })
    .catch(err => alert("An unknown error occured!!"))
  }

  const handleSearch = e => {
    const searchQuery = e.target.value
    setSearch(searchQuery)
    const filtered = persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredPhonebook(filtered)
  }

  const handleDelete = (id) => {
   const updatedPhonebook = persons.filter(person => person.id !== id)
   phoneBookService
   .deletePerson(id)
   .then(res => {
    setPersons(updatedPhonebook)
   })
  }

  const handleUpdateNumber = (personToUpdate, number) => {
    const updatedPerson = {...personToUpdate, number:number}
    phoneBookService.updatePerson(updatedPerson, updatedPerson.id)
    .then(res => {
      const updatedPhonebook = persons.map(person => {
        if(person.id === personToUpdate.id)
        {
          return updatedPerson
        }
        return person
      })
      setPersons(updatedPhonebook)
      setNewName('')
      setNewNumber('')
    })
  }

  useEffect(() => {
    phoneBookService
    .get()
    .then(res => setPersons(res.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} filteredPhonebook={filteredPhonebook} />
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleClick={handleClick}/>
      <h2>Numbers</h2>
      {
        persons.map(person => <Person key={person.id} person={person} handleDelete={handleDelete}/>)
      }
    </div>
  )
}

export default App