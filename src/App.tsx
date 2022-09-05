import { bd } from "./firebase-config"
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Sidebars } from "./pages/sidebars"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function Inicio(){
  return(
    <div><Sidebars/></div>
  )
}
async function firebase(){
  const querySnapshot = await getDocs(collection(bd, "Usuarios"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}
 function App() {

  useEffect(() => {

  }, [])

  return (
    <div>
      <Inicio></Inicio>
    </div>
  )
}

export default App
