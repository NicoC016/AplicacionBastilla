import { bd } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { sidebars } from "./pages/sidebars"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function openNav() {
  //@ts-ignore
  document.getElementById("mySidenav").style.width = "250px";
  //@ts-ignore
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  //@ts-ignore
  document.getElementById("mySidenav").style.width = "0";
  //@ts-ignore
  document.getElementById("main").style.marginLeft = "0";
}
async function App() {
  const querySnapshot = await getDocs(collection(bd, "Usuarios"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  useEffect(() => {

  }, [])




  return (
    <nav className="navbar navbar-expand-lg fixed-top">

      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
        <a href="/index"><i className="bi bi-list"></i> Menú</a>
        <a href="/products"><i className="bi bi-laptop"></i> Productos</a>
        <a href="/users"><i className="bi bi-people-fill"></i> Clientes</a>
        <a href="/category"><i className="bi bi-grid"></i> Categorias</a>

      </div>

      <div id="main">
        <span className="text-white" onClick={() => openNav()}>&#9776; </span>
      </div>
      <div className="container">
        {/* <a className="navbar-brand" href="/index"><img src="img/Programacion 2.png" alt="Node.js icon" className="logo22"></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
  )
}

export default App
