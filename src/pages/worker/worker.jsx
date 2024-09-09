import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WorkerContext } from "../../context/workersContext";


export default function Worker() {
  const {getWorkerById} = useContext(WorkerContext);
  const id = useParams().id;
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    let data = getWorkerById(id);
    console.log(data, getWorkerById);
    setWorker(data);
  }, []);

  return (
    <div>worker</div>
  )
}
