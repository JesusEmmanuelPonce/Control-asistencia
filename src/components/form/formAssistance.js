import React, {useState,useEffect} from 'react';
import Swal from 'sweetalert2';
import './formAssistance.css';
import axios from 'axios';

const FormAssistances = () => {

    const [error, setError] = useState(false);
    const [teacher, setTeacher] = useState('');
    const [jsonTeacher, setJsonTeacher] = useState([])

    useEffect(() => {
        const getTeacher = async() => {
            const resultado = await axios.get('http://localhost:3001/teachers');
            setJsonTeacher(resultado.data)
        }
        getTeacher()
    }, [])

    const assistanceSumit = async e => {
        e.preventDefault()

        const event = new Date();
        let h = event.getHours();
        let m = event.getMinutes();
        let s = event.getSeconds();

        let day = event.getDate();
        let month = event.getMonth() + 1;
        const year = event.getFullYear();
        
            if(s < 10) {
                s = '0' + s 
            }
            if(m < 10) {
                m = '0' + m
            }
            if(h < 10) {
                h = '0' + h
            }

        const hour = `${h}:${m}:${s}`;

        if(!teacher){
            setError(true);
            Swal.fire('Selecione su nombre')
            return;
        }
        
        setError(false)
        
        await axios.post('http://localhost:3001/entries', {
            teacher,
            day,
			month,
			year,
			hour
        },
            Swal.fire(
            'Asistencia agregada',
            '',
            'success'
            ))
    }

    return(
       <div className="container-form-pb">
            <form onSubmit={assistanceSumit}>
                <select onChange={e=>setTeacher(e.currentTarget.value)} className="form-item-pb">
                    <option value="">Elija su nombre</option>
                    {
                        jsonTeacher.map(item=>(
                        <option key={item._id} value={item._id}>{item.names}</option>
                    ))}
                </select>
                <input className="btn-success-pb" type="submit" value="Registrar"/>   
            </form>
       </div>
    )
}

export default FormAssistances;