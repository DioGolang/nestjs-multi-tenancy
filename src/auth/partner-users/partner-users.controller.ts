import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {UserPresenter} from "../users/dto/user.presenter";
import {CreatePartnerUserDto} from "../users/dto/create-partner-user.dto";

@Controller('partners/users')
export class PartnerUsersController{
    constructor(private usersService : UsersService ) { }

    @Post()
    async create(@Body() data : CreatePartnerUserDto){
        const user = await this.usersService.createPartnerUser(data);
        return new UserPresenter(user);
    }
}
