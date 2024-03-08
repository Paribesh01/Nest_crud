import { Controller, Get,Post,Put, Param, Body, Query, Delete } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjs.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService:NinjasService){}

    @Get()
    getNinjas(@Query("weapon")weapon:"knife"|"stars") {
        

        return this.ninjaService.getNinjas(weapon);
    }

    @Get(':id')
    findOne(@Param('id') id: number ) {
        // console.log(id)
        return this.ninjaService.getOneNinjas(id)
        
        ;
    }

    @Post()
    createNinja(@Body() createNinjaDto:CreateNinjaDto){

       const newNinja= this.ninjaService.createNinja(createNinjaDto)

        return{
            newNinja
        };
    }
    @Put(':id')
    updateNinja(@Param('id')id:number,@Body() updateNinjaDto:UpdateNinjaDto){
        const updatedNinja = this.ninjaService.updateNinja(id,updateNinjaDto)
        return updatedNinja
    }
    @Delete(":id")
    deleteNinja(@Param("id")id:number){
        return this,this.ninjaService.removeNinja(id);
    }

}
