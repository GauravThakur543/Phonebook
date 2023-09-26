export default function Form({newName, setNewName, newNumber, setNewNumber, handleClick}){
    return(
        <>
            <form>
                <div>
                name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
                <br />
                number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
                </div>
                <div>
                <button type="submit" onClick={handleClick}>add</button>
                </div>
            </form>
        </>
    )
}