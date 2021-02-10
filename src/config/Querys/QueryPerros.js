import { gql } from '@apollo/client';


// const client = ...
export default function QueryPerro(){

    client
  .query({
    query: gql`
    query MyQuery {
      dog {
        fecha_nacimiento
        foto
        id
        ninos
        porte
        raza
        sexo
        depto
        castrado
        apodo
        created_at
        dogPorte_porteId {
          porte
        }
      }
    }
    `
  })
  .then(result => console.log(result));


}
