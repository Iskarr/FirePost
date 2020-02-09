// Moves to locations with mutliple functions.
function run() {
  moveForward(),
    moveForward(),
    moveForward(),
    turnRight(),
    moveForward(),
    moveForward(),
    print("I am on the center dot."),
    moveForward(),
    moveForward(),
    print("I am on the bottom center dot."),
    turnLeft(),
    moveForward(),
    moveForward(),
    moveForward(),
    print("I am at the bottom right dot. Beep-boop!");
}

// For loop replaces multiple move functions.
function run() {
  for (let i = 0; i < 3; i++) {
    moveForward();
  }
  turnRight();
  moveForward(), moveForward(), print("I am on the center dot.");
  for (let i = 0; i < 2; i++) {
    moveForward();
  }
  print("I am on the bottom center dot."), turnLeft();
  for (let i = 0; i < 3; i++) {
    moveForward();
  }
  print("I am at the bottom right dot. Beep-boop!");
}
