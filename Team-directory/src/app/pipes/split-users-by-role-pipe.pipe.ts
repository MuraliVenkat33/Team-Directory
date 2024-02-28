import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitUsersByRolePipe'
})
export class SplitUsersByRolePipe implements PipeTransform {

  transform(users: any[], param: { key1: string, key2: string }): any[] {
    // Filter by user role
    users = users.filter((user: any) => user.role.includes(param.key1));

    // Filter by search query
    param.key2 = param.key2.toLowerCase();
    users = users.filter(item =>
      Object.values(item).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(param.key2);
        }
        return false;
      })
    );

    return users;
  }
}

