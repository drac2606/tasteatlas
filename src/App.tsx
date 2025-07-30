import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

import { useEffect, useState } from 'react';


// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const [data, setData] = useState<Dish[]>([]);


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student 
            apellidos="Anchundia Cobo"
            nombres="Dario Rainiero"
            paralelo="2"
          />

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={data}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App