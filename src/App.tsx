import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewNote } from "./NewNote";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
};

export type RawNoteDat = {
  title: string;
  markdown: string;
  tagsIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
export default App;
