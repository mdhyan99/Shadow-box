import { useEffect,useState } from "react";
export default function Apod({date}) {
    const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3"
    const [picture, setPicture] = useState("");
    useEffect(() => {
        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        )
            .then((res) => res.json())
            .then((json) => {
                // setPicture(json.hdurl);
                // console.log(json);
                setPicture(json);
            });
    },[date]);
    console.log("das ist der Geburt");
    return (
        <>
            <img src={picture.url}></img>
            <h3>{picture.title}</h3>
            <h3>{picture.copyright}</h3>
            <h3>{picture.date}</h3>
        </>
    );
}
