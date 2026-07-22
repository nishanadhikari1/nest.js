import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}
  private users: User[] = [
    { id: '1', name: 'Nishan Adhikari', email: 'xyz@gmail.com' },
    { id: '2', name: 'Nishan Adhikari', email: 'xyz@gmail.com' },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users');
    return this.users.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
    );
  }
  findUserByid(id: string) {
    const user = this.users.find((user) => user.id === id);
    if(!user){
        throw new NotFoundException('User not found')
    }
    return user
  }
  createUser(dto: CreateUserDto) {
    this.users = [dto, ...this.users];
    return this.users;
  }
  updateUser(id: string, dto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...dto,
        };
      }

      return user;
    });

    return this.users.find((user) => user.id === id);
  }
  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);

    return {
      message: 'User deleted successfully',
    };
  }
}
