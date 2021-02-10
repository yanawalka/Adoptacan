import React, { Fragment, useState } from 'react';


const perro = {
    apodo: "peshito",
    castrado: true,
    created_at: "2021-02-10T19:37:09.138598+00:00",
    depto: false,
    dogPorte_porteId: { __typename: "porte", porte: "mediano" },
    fecha_nacimiento: "2021-02-02",
    foto: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
    id: "84dc45c9-7220-4c9a-bca7-b4ae9308dce8",
    ninos: false,
    porte: "62e95ee0-2e7c-4745-9d17-4e58c0998391",
    raza: null,
    sexo: "macho",
    __typename: "dog"
}

export default function Showroom (){

    return(

    <div>
        <p>Tipo de animal: {perro.__typename} </p>
        <p>Castrado: {perro.castrado} </p>
        <p>Apto para departamento: {perro.depto} </p>
        <img src={perro.foto}></img>
        <p>Apto para ninos: {perro.ninos} </p>
        <p>Raza: {perro.raza} </p>
        <p>Sexo:{perro.sexo}</p>
    </div>
    )
}