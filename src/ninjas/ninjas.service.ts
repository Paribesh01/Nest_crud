import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjs.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {

    private ninjas=[
        {id:1,name:"ninjasA",weapon:"knife"}
        ,{id:2,name:"ninjasB",weapon:"stars"}
    ];
    getNinjas(weapon?:"knife"|"stars"){
        if(weapon){
            return this.ninjas.filter((ninjas)=>ninjas.weapon===weapon)
        }
        return this.ninjas
    }
    getOneNinjas(id:number){
        // console.log(id)
        const foundNinja =this.ninjas.find((ninja)=>ninja.id==id)
        console.log(foundNinja)
        if(!foundNinja){
            throw new Error("ninja not found")
        }
        return foundNinja

    }


    createNinja(createNinjaDto:CreateNinjaDto){
        const newNinja ={
            ...createNinjaDto
            ,
            id:Date.now()
        }
        this.ninjas.push(newNinja)

        return newNinja
    }

    updateNinja(id:number,updateNinjaDto:UpdateNinjaDto){
    this.ninjas = this.ninjas.map((ninja)=>{
        if(ninja.id==id){
            // console.log("Logging the found ninja "+ ninja)
            return{...ninja,...updateNinjaDto}
        }
        return ninja; 
    })
    return this.getOneNinjas(id)

    }

    removeNinja(id:number){
        const tobeRemoved  = this.getOneNinjas(id)
        this.ninjas = this.ninjas.filter((ninja)=>ninja.id!=id)
        return tobeRemoved;
    }

}
