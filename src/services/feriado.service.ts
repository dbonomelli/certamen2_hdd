import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Feriado } from 'src/model/feriado';

@Injectable()
export class FeriadoService {
    constructor(private readonly configService:ConfigService){}
    
    async getFeriado():Promise<Feriado[]>{

        let url:string = this.configService.get<string>("ENDPOINT_FERIADOS")
        let res = await axios.get(url)
        let data = res.data;
        return data.map((f)=>{
            let irr = f.irrenunciable == 1 ? "Si": "No";
            return {nombre: f.nombre, fecha: f.fecha, irrenunciable: irr}
        });
    }

    async getFeriadoIrrenunciable():Promise<Feriado[]>{
        let url:string = this.configService.get<string>("ENDPOINT_FERIADOS")
        let irren:[];
        let res = await axios.get(url)
        let data = res.data;
        
        return data.map((f)=>{
            if(f.irrenunciable == '1'){
                let irr = f.irrenunciable == '1' ? "Si": "No";
                return {nombre: f.nombre, fecha: f.fecha, irrenunciable: irr}
            }else{
                return {};
            }
        })
    }
}
