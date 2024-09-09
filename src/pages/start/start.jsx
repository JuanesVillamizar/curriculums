import { useContext, useEffect, useState } from "react";
import CardWorker from "../../components/Card";
import { WorkerContext } from "../../context/workersContext";

const Start = () => {

    const {getWorkers} = useContext(WorkerContext);
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        let data = getWorkers();
        // console.log(data);
        setWorkers(data);
    }, []);

    let generateColor = () => {
        // Genera un número aleatorio entre 0 y 0xFFFFFF (16777215)
        const color = Math.floor(Math.random() * 0xFFFFFF);
        // Convierte el número a una cadena hexadecimal
        const colorHex = color.toString(16);
        // Asegura que la cadena tenga 6 caracteres (rellena con ceros si es necesario)
        return `#${colorHex.padStart(6, '0')}`;
    }

    return (
        <div className="row" style={{ padding: '50px', display: 'flex', width: '100%', gap: 10, justifyContent: 'center' }}>
            {
                workers.map((worker, index) => <CardWorker className="col-4" worker={worker} key={index} color={generateColor()} />)
            }
        </div>
    );
}

export default Start;