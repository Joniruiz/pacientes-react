import React,{Fragment,useState, useEffect} from 'react';
import './assets/index.css'
import Formulario from './components/Formulario'
import Cita from './components/Cita'
function App() {
      
    //citas en local storage

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
      citasIniciales= []
    }


    //arreglo de citas
    const [citas,setCitas] = useState(citasIniciales);


    //use effect para realizar cietas operaciones cuando el state cambia

    useEffect( ()=>{
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      }else{
        localStorage.setItem('citas',JSON.stringify([]))
      }
    },[citas])

    //funcion Que tome las citas actuales y agregue las nuevas

    const crearCita = cita =>{
      setCitas([
        ...citas,
        cita
      ]);
    }

    //funcion que elimina una cita por su id

    const eliminarCita = id =>{
      const nuevaCitas = citas.filter(cita =>cita.id !== id)
      setCitas(nuevaCitas)
    }

    //Mensaje condicional
    const titulo = citas.length === 0 ?   'No hay citas'   :'Administra tus Citas'


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
            crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
          
        </div>
      </div>
      </Fragment>
   
  );
}

export default App;
