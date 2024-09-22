import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WorkerContext } from "../../context/workersContext";


export default function Worker() {
  const {getWorkerById, getWorkers} = useContext(WorkerContext);
  const id = useParams().id;
  const [worker, setWorker] = useState([]);
  let color = '#000';

  useEffect(() => {
    // let data = getWorkerById(id);
    let dataWorkers = getWorkers();
    let data = dataWorkers.filter(worker => worker.id == id)[0];
    // console.log('Prueba -> ', dataWorkers, data);
    color = generateColor();
    setWorker(data);
    // this.setState({});
  }, [color]);

  let generateColor = () => {
    // Genera un número aleatorio entre 0 y 0xFFFFFF (16777215)
    const color = Math.floor(Math.random() * 0xFFFFFF);
    // Convierte el número a una cadena hexadecimal
    const colorHex = color.toString(16);
    // Asegura que la cadena tenga 6 caracteres (rellena con ceros si es necesario)
    return `#${colorHex.padStart(6, '0')}`;
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px auto' }}>
      
      <div className="container-fluid" style={{ width: '80%', margin: 10, border: 'solid 1px #fefefe', borderRadius: '20px' }}>
        <div className='container-img' style={{ backgroundColor: color }}>
            <span>270 x 150</span>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
