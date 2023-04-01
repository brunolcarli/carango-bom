import type { Vehicle } from '@/model/vehicle';
import axios from 'axios';



export function postVehicles(dataVehicles: Vehicle): Promise<Vehicle> {
    return axios.post('http://localhost:3000/api/veiculos', dataVehicles)
    .then(response => response.data.dados)
}

export function getVehicles(): Promise<Vehicle[]> {
    return axios.get('http://localhost:3000/api/veiculos')
        .then(response => response.data.dados)
        .then((list: Vehicle[]) => list);

}

export function deleteVehicles(id: string): Promise<Vehicle> {
    return axios.delete('http://localhost:3000/api/veiculos/' + id)
    .then(response => response.data.dados)
}