import {Note} from "./Note"
import { useEffect, useState } from "react"
import { getAllNotes } from "./services/notes/getAllNotes"
import { createNote } from "./services/notes/createNote"

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loanding, setLoanding] = useState(false)

  useEffect(() => {
    console.log('useEffect')
    setLoanding(true)
    getAllNotes().then((notes) => {
      setNotes(notes)
      setLoanding(false)
    })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Crear nota')
    const nowToAddToState = {
      title: newNote,
      body: newNote,
      userID: 1
    }

    createNote(nowToAddToState).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote))
    }) 

    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {loanding ? 'Cargando ...':''}
      <ol>
        {notes.map(note => <Note key={note.id} {...note}/>)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
    
  )
}

export default App
