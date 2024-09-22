import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WorkerContext } from "../../context/workersContext";
import AccordionComponent from "../../components/Accordion";


export default function Worker() {
  const { getWorkerById, getWorkers } = useContext(WorkerContext);
  const id = useParams().id;
  const [worker, setWorker] = useState([]);
  let color = '#000';

  useEffect(() => {
    // let data = getWorkerById(id);
    let dataWorkers = getWorkers();
    let data = dataWorkers.filter(worker => worker.id == id)[0];
    // console.log('Trabajador -> ', data);
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
    <div className="container-worker">
      <div className="container-fluid container-imagen-worker">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className='container-img' style={{ backgroundColor: color }}>
              {/* <span>270 x 150</span> */}
            </div>
            <div className="text-center">
              <span className="fs-2">{worker.nombre}</span>
            </div>
            <div className="text-center">
              <span className="fs-4">{worker.puesto_aplicado}</span>
              <div/>
              <span className="fs-7">{worker.informacion_contacto.correo_electronico}</span>
              <div/>
              <span className="fs-7">{worker.informacion_contacto.telefono}</span>
              <div/>
              <span className="fs-7">{worker.informacion_contacto.direccion}</span>
              <div/>
              <span className="fs-7">{worker.informacion_contacto.linkedin}</span>
            </div>
          </div>
          <div className="col-12 col-md-8 py-3">
            <AccordionComponent worker={worker}/>
          </div>
        </div>
      </div>
    </div>
  );
}
