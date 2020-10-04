const TODO_ARRAY = [
  "Read a book",
  "Programming",
  "Buy groceries",
  "Go running",
  "Play the guitar",
  "Walk the dog",
  "Take a photo",
  "Do the dishes",
];
const MARK_COMPLETED = ["Walk the dog", "Take a photo"];
const TODO_INDEX = Math.floor(Math.random() * (TODO_ARRAY.length - 1) + 1);
const TODO_ELEMENT = TODO_ARRAY[TODO_INDEX];

export { TODO_ARRAY, MARK_COMPLETED, TODO_INDEX, TODO_ELEMENT };
