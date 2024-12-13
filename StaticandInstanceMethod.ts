/*
Static Method คือ method ที่เป็นของคลาส ไม่จำเป็นต้องสร้าง instance ก็สามารถเข้าถึงได้
    ไม่สามารถใช้ this ได้  เนื่องจากมันไม่มี instance(ไม่ต้องอ้างอิงไปยัง object เพราะมันเป็นของ class)
Instance Method คือ method ที่เป็นของ instance จำเป็นต้องสร้าง instance ก็สามารถเข้าถึงได้
    สามารถใช้ this ได้
*/

class MyClass {
  myObject = () => {
    console.log("Instance Method");
  };
  static myStaticMethod() {
    console.log("Static Method");
  }
}

MyClass.myStaticMethod(); // สามารถเข้าถึงได้โดยไม่จำเป็นต้องสร้าง instance
const myClass = new MyClass();
myClass.myObject(); // สามารถเข้าถึงได้โดยต้องสร้าง instance
