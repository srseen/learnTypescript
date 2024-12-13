// ใช้ interface เพื่อกำหนดโครงสร้างของข้อมูล สำหรับใช้กับ object หรือ class
// ไม่สามารถสร้าง instance ได้
// ไม่สามารถสร้างตัวแปรได้
// ไม่สามารถสร้างฟังก์ชันได้

interface User {
  id: number;
  name: string;
  address: string;
}

// การใช้ class สามารถสร้าง instance ได้
// การใช้ class สามารถสร้างตัวแปรได้
// การใช้ class สามารถสร้างฟังก์ชันได้ เช่น constructor, method, property ต่างๆ

class StudentUser {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public address: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

// การสร้าง instance ควรใช้ new
const student1 = new StudentUser(1, "John", 20, "123 Main St");

console.log(student1);

// ควรเขียนแบบนี้จะดีกว่า เพื่อป้องกันการซ้ำซ้อน
type PersonInfo = [number, string];

const userDetails: PersonInfo = [1, "Hello"];
const greeting: PersonInfo = [1, "Hello"];
const employee: PersonInfo = [1, "Hello"];
