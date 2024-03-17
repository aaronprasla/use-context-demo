import { useContext } from "react";
import { NameContext } from "./App";
export default function Home() {
    const { username } = useContext(NameContext);
    return (

            <h1>Hello, {username}!</h1>

    );
}