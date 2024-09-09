import React, { useState, useEffect } from "react";
import data from '../respuesta.json';
import { SERVICES_URL } from "../environment/environment";

const WorkerContext = React.createContext([]);
const {Provider} = WorkerContext;

const WorkerProvider = ({children}) => {

    const [workers, setWorkers] = useState([]);
    const [workerSearch, setWorkerSearch] = useState('');

    const getWorkers = () => { 
        if(workerSearch.length > 3){
            console.log(workerSearch);
            // return workers.filter((worker) => {
            //     if(worker.nombre === workerSearch || worker.puesto_aplicado === workerSearch){
            //         return worker;
            //     }
            // });
        }
        return workers;
    };

    const getData = (params) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    }

    const getWorkerById = (id) => {
        workers.map((worker) => {
            if(worker.id == id){
                console.log(worker);
                return worker;
            }
        });
    }

    useEffect(() => {
        getData({}).then(data => {
            if(data.status === 200){
                setWorkers(data.response);
            }else{
                setWorkers([]);
            }
        });
    }, [workers]);

    return (
        <Provider value={{
                    getWorkers,
                    getWorkerById,
                    setWorkerSearch
                }}>
            {children}
        </Provider>
    );
}

export {WorkerProvider, WorkerContext};