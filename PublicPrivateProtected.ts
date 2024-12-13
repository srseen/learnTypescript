class User {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const user = new User("John", 20, "123 Main St"); // age ไม่สามารถเข้าถึงได้
console.log(user.name);
console.log(user.age); // จะเกิด error เพราะ age เป็น private
console.log(user.address);
// จะเกิด error เพราะ address เป็น protected แต่สามารถเข้าถึงได้จากคลาสลูกได้ ดังนั้น เราจะไม่พยายามเขียนคำสั่งนี้ เพระมันจะเกิด error แม้ว่าเมื่อ compile จะไม่มีปัญหา
