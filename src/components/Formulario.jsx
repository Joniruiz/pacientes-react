import React,{Fragment , useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    //Crear State de Citas

    const[cita,setCita] = useState({
        mascota:'',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error ,setError] = useState(false)

    //Funcion que se ejecuta cada que el usuario escribe en un input

    const handleChange = e =>{
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores

    const {mascota,propietario,fecha,hora,sintomas} = cita

    //cuando el usuario presione agregar cita

    const submitCita =(e)=>{
        e.preventDefault();
        
        console.log(mascota)

        //Validar
        if(mascota.trim() === '' ||propietario.trim() === '' ||fecha.trim() === '' ||hora.trim() === '' ||sintomas.trim() === ''){
            setError(true);
            return;
        }

        //Eliminar el mensaje previo

        setError(false)


        //Asignar un ID
        cita.id= uuidv4();
        

        //Crear la cita

        crearCita(cita);



        // Reiniciar el form

        setCita({
            mascota:'',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ?  <p className='alerta-error'>Todos los campos son obligatorios</p>: null}

            <form 
            action=""
                onSubmit={submitCita}
            >
                <label htmlFor="">Nombre Mascota</label>
                <input 
                type="text" 
                name="mascota" 
                className='u-full-width' 
                placeholder='Nombre Mascota'
                onChange={handleChange}
                value = {mascota}/>


                <label htmlFor="">Nombre Dueño</label>
                <input 
                type="text" 
                name="propietario" 
                className='u-full-width' 
                placeholder='Nombre Dueño de la mascota'
                onChange={handleChange}
                value = {propietario}/>

                <label htmlFor="">Fecha</label>
                <input 
                type="date" 
                name="fecha" 
                className='u-full-width' 
                onChange={handleChange}
                value={fecha}/>

                <label htmlFor="">Hora</label>
                <input 
                type="time" 
                name="hora" 
                className='u-full-width' 
                onChange={handleChange}
                value ={hora}/>
                
                <label htmlFor="">Sintomas</label>
                <textarea 
                name="sintomas"
                className='u-full-widht'
                onChange={handleChange}
                value = {sintomas}
                resize='none'>
                </textarea>

                <button type='submit'
                className= 'u-full-width button-primary'>Agregar Cita</button>

            </form>
        </Fragment>
      );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;