import type { Brand } from "./brand";

export interface Vehicle {    
    id: string;
    modelo: string;
    ano: number | null;
    valor: number | null;
    imagemUrl: string;
    marcaId: string;
    marca: Brand | null;
}
