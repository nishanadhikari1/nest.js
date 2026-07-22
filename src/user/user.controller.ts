import { Controller, Query, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name)
  }

  @Get(':id')
  getUserById(@Param('id') id: string): unknown {
    return this.userService.findUserByid(id)
  }
  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto): unknown {
    return this.userService.createUser(CreateUserDto)
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto): unknown {
    return this.userService.updateUser(id, UpdateUserDto)
  }
  @Delete(':id')
  deleteUser(id:string){
    return this.userService.deleteUser(id)
  }
}