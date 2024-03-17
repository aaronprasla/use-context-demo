import { useContext, useState } from "react"
import { NameContext } from "./App";
export default function Profile() {

    const [newUsername, setNewUsername] = useState('');
    const { setUsername } = useContext(NameContext);

    return (
        <>

            <input type="text" onChange={(event) => setNewUsername(event.target.value)} />
            <button type="submit" onClick={() => setUsername(newUsername)}>Change Username</button>

        </>
    )
}