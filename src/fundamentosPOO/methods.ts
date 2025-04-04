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
    return `${this.day}/${this.month}/${this.year}`;
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

  get addPadding(): string{
    const paddingDay = this.day <= 9 ? `0${this.day}` : this.day
    const paddingMonth = this.month <= 9 ? `0${this.month}` : this.month
    const paddingYear = this.year.toString()

      return `${paddingYear}/${paddingMonth}/${paddingDay}`;
  }
}

const myDate = new MyDate({year:1998, month:11, day:4});
console.log('myDate:' + myDate.printFormat);

console.log(myDate.addPadding)

/*myDate.add({amount:3, type:"days"});
console.log('myDate2: ' +myDate.printFormat);

myDate.add({amount:1, type:'months'});
console.log('myDate3: ' + myDate.printFormat);

console.log(myDate.printFormat);
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);

console.log(myDate)*/
