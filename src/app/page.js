'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Carregando from "../app/Componentes/Carregando";
import ErrorGetData from "../app/Componentes/ErrorGetData";

export default function Home() {

  const [listaProduct, setListaProdudt] = useState ([]);
  const [listaComplete, setListaComplete] = useState ([]);
  const [search, setSearch] = useState("");
  const [errorFatch, setErrorFatch] = useState (false);

  useEffect(() => {
    const getProtucts = async () =>{
      try {
        const response = await fetch("http://localhost:3000/api")
        const data = await response.json();
        setListaProdudt(data);
        setListaComplete(data);
      }catch{
        setErrorFatch(true);
      }
    };
    getProtucts();
  }, []);

  const orderAz  = () => {
    let newList = [...listaProduct].sort((a,b)=>
      a.bolsa.localeCompare(b.bolsa)
    );
    setListaProdudt(newList);
  }

  