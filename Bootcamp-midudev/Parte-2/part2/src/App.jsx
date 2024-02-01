import {Note} from "./Note"
import { useState } from "react"

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Crear nota')
    const nowToAddToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }
    console.log(nowToAddToState)
    setNotes(notes.concat(nowToAddToState))
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "ShowAll"}</button>
      <ol>
        {notes
        .filter(note => {
          if(showAll === true) return true
          return note.important === true
        })
        .map(note => <Note key={note.id} {...note}/>)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
    
  )
}

export default App
