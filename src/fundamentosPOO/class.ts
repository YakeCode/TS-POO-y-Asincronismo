interface UserProps {
  name: string;
  age: number;
}

class User {
  name: string;
  age: number;

  constructor({ name, age }: UserProps) {
    this.name = name;
    this.age = age;
  }

  public get greeting(): string {
    return `i a'm ${this.name} y have ${this.age} years old`;
  }

  public rename({ name }: { name: string }): void {
    this.name = name;
  }
}

const user1 = new User({name:'yake', age:26});

console.log(user1.greeting); // no tiene paréntesis lo cual no deja modificar es solo lectura

user1.rename({name:'Yimi'})
