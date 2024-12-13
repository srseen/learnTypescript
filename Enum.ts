// ใช้ enum แทนชุดคำสั่งที่มีค่าเป็นค่าคงที่ ข้อมูลที่จำกัดและแน่นอน
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

function showDirection(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Up");
      break;
    case Direction.Down:
      console.log("Down");
      break;
    case Direction.Left:
      console.log("Left");
      break;
    case Direction.Right:
      console.log("Right");
      break;
  }
}

showDirection(Direction.Up);
showDirection(Direction.Down);
showDirection(Direction.Left);
showDirection(Direction.Right);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
