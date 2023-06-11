import { createContext, useState } from "react";
export const LocalNotes= createContext();
export const NotesProvider=({children})=>{
    const [star1, setstar1] = useState(true);
    const [star2, setstar2] = useState(true);
    const [star3, setstar3] = useState(true);
    const [star4, setstar4] = useState(true);
    const [star5, setstar5] = useState(false);
    return<>
    <LocalNotes.Provider value={[{star1, setstar1},{star2, setstar2},{star3, setstar3},{star4, setstar4},{star5, setstar5}] }>
        {children}
    </LocalNotes.Provider></>
}