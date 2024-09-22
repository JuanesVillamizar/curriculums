import { useContext, useEffect, useState, useRef } from "react";
import CardWorker from "../../components/Card";
import { WorkerContext } from "../../context/workersContext";

const Start = () => {

    const {getWorkers} = useContext(WorkerContext);
    const [workers, setWorkers] = useState([]);
    const [workersAux, setWorkersAux] = useState([]);
    let ref = useRef(null);

    useEffect(() => {
        let data = getWorkers();
        // console.log(data);
        setWorkers(data);
        setWorkersAux(data);
    }, []);

    let generateColor = () => {
        // Genera un número aleatorio entre 0 y 0xFFFFFF (16777215)
        const color = Math.floor(Math.random() * 0xFFFFFF);
        // Convierte el número a una cadena hexadecimal
        const colorHex = color.toString(16);
        // Asegura que la cadena tenga 6 caracteres (rellena con ceros si es necesario)
        return `#${colorHex.padStart(6, '0')}`;
    }

    const _handleChangeSearch = (input) => {
        // console.log(input.target.value);
        if(input.target.value == ''){
            setWorkers(workersAux);
        }else{
            let searchWorkers = [];
            workersAux.map(e => {
                // console.log(e.nombre.toLowerCase(),input.target.value.toLowerCase());
                if(e.nombre.toLowerCase().includes(input.target.value.toLowerCase())){
                    // console.log('Entra');
                    searchWorkers.push(e);
                }
            });
            // console.log(searchWorkers, workers, workersAux);
            setWorkers(searchWorkers);
        }
    }

    return (
        <div className="row">
            <div className="col-12 my-3 px-5">
                <div className="d-flex justify-content-between align-items-center">
                    <span>Empleados</span>
                    <div className="container-div-search">
                        <input type="text" ref={ref} placeholder="Buscar..." className="input-search" onChange={_handleChangeSearch.bind(ref)}/>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="row starts-container">
                    {
                        workers.map((worker, index) => <CardWorker className="col-4" worker={worker} key={index} color={generateColor()} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Start;