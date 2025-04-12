interface DateProps{
  year: number;
  month: number;
  day: number;
}

type dates= 'days' | 'months' | 'years'

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor({year, month, day}: DateProps) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  get printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add({ amount, type }: { amount: number; type: dates }) {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

const myDate = new MyDate({year:1998, month:11, day:4});
//console.log('myDate:' + myDate.printFormat);

console.log(myDate.printFormat)

/*myDate.add({amount:3, type:"days"});
console.log('myDate2: ' +myDate.printFormat);

myDate.add({amount:1, type:'months'});
console.log('myDate3: ' + myDate.printFormat);

console.log(myDate.printFormat);
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);

console.log(myDate)*/
