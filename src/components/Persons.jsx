export default function Persons({phonebook}){
    return(
        <>
            {
                phonebook.map(person => <p key={person.id}>{person.name} {person.number}</p> )
            }
        </>
    )
}
