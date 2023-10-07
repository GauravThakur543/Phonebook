import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

//using axios
const get = () => {
    return axios.get(baseUrl)
}

//using fetch
const create = (personToAdd) => {
    return fetch("http://localhost:3001/persons",{
      method : "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(personToAdd)
    })
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
} 

const updatePerson = (personToUpdate, id) => {
    return axios.put(`${baseUrl}/${id}`, personToUpdate)
}

export default {get, create, deletePerson, updatePerson}