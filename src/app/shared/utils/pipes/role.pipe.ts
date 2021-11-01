import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'role'
})

export class RoleUserPipe implements PipeTransform {

  transform(value: string): string{
    if(value === "true"){
      return `Administrador`
    }else{
      return `Usuário`
    }
  }
}
