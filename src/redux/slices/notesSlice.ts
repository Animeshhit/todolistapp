import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  task: string;
  status: "completed" | "pending";
  starred: boolean;
}

interface NotesState {
  notes: Note[];
}

// Function to retrieve initial notes from localStorage
const getInitialNotes = (): Note[] => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    return JSON.parse(storedNotes);
  } else {
    localStorage.setItem("notes", "[]");
    return [];
  }
};

const initialState: NotesState = {
  notes: getInitialNotes(),
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // Add a new note
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    // Remove a note by ID
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    // Toggle the completion status of a note by ID
    toggleStatus: (state, action: PayloadAction<string>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.status = note.status === "completed" ? "pending" : "completed";
      }
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    // Toggle the starred status of a note by ID
    toggleStarred: (state, action: PayloadAction<string>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.starred = !note.starred;
      }
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    // Update a note's task by ID
    updateNote: (
      state,
      action: PayloadAction<{ id: string; task: string }>
    ) => {
      const note = state.notes.find((note) => note.id === action.payload.id);
      if (note) {
        note.task = action.payload.task;
      }
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { addNote, removeNote, toggleStatus, toggleStarred, updateNote } =
  notesSlice.actions;

export default notesSlice.reducer;
