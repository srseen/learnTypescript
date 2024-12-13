// ใช้ type alias เพื่อการอ่านง่าย
{
  type UserInfo = [number, string]; // กำหนด type alias
  const userDetails: UserInfo = [1, "Hello"]; // กำหนดค่า
  console.log(userDetails); // แสดงค่า
}
{
  type IdAndMessage = [number, string];
  const greeting: IdAndMessage = [1, "Hello"];
  console.log(greeting);
}
{
  type EmployeeBasic = [number, string];
  const employee: EmployeeBasic = [1, "Hello"];
  console.log(employee);
}
