import axios from 'axios'
import type { Brand } from '@/models/interfaces'

import * as auth from './authentication-service'

const url = 'http://localhost:3000/api/marcas'

export function getBrandsApi(): Promise<Brand[]> {
    return axios.get(url)
        .then(resp => resp.data.dados)
        .then((brand: Brand[] )=> brand)
}

export function saveBrandApi(nameBrand: string): Promise<any> {
    let token = auth.getAuth()
    return axios.post(url, { nameBrand })
        .then(resp => {
            console.log(nameBrand)
            console.log(resp.data)
            return resp.data.dados
        
        })
        .catch(e => console.log('erro na requisição'))

}

export function deleteBrandApi(id: string): Promise<void> {
    return axios.delete(`${url}/${id}`)
        .then(resp => resp.data.dados)
}

export function editBrandApi(brand: Brand): Promise<Brand> {
    return axios.put(`${url}/${brand.id}`)
        .then(resp => resp.data.dados)
} 