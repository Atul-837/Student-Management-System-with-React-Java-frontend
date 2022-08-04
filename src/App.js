import React from "react";
import "./App.css";

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";


 export default function App(){
    return(
        <>
          <HeaderComponent/>
          <ListEmployeeComponent/>
          <FooterComponent/>
        </>
    )
} 
