export default function Filter({search, handleSearch,filteredPhonebook}){
    return(
        <>
            filter shown with <input value={search} onChange={handleSearch}/>
            {
                filteredPhonebook.map(person => <p key={person.id}>{person.name} {person.number}</p> )
            }
        </>
    )
}