// เพื่อให้การเขียนโปรแกรมง่ายขึ้น เนื่องจากบางครั้งเราไม่แน่ใจว่าค่าที่จะใส่จะมีหรือไม่มี
// Optional คือการที่คุณสามารถใส่ค่าได้หรือไม่ใส่ค่าได้
// การใช้ ? เพื่อบอกว่าเป็น optional
// การใช้ ? จะทำให้ค่าที่ไม่ได้กำหนดจะเป็น undefined

// มี 2 แบบ
// 1.optional parameter
function add(a: number, b?: number) {
  // b? สามารถใส่หรือไม่ใส่ได้
  return a + b;
}

console.log(add(1, 2));
console.log(add(1));

// 2.optional property
interface User {
  name: string;
  age?: number; // age? สามารถใส่หรือไม่ใส่ได้
}

const user: User = { name: "John" };
console.log(user);
