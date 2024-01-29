```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp new_note_spa
    Note right of browser: Uses the JavaScript code to create a new note, adds it to the notes list, rerenders the note list on the page, and sends the new note to the server
    activate server
    server-->>browser: HTTP status code 201 Created
    deactivate server
    