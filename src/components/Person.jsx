export default function Persons({person, handleDelete}){
    return <p>{person.name}  {person.number}   <button onClick={() => {
        if(window.confirm(`Delete ${person.name} from phonebook?`))
        {
            handleDelete(person.id)
        }}
    }>Delete</button></p>
}
