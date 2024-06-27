import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // this invokes map method on the array [19, 20, 34], which applies the
  // this gets function to each element in the array.
  // this returns a new array from map containing the ClassRoom objects
  // function for each element in the original array.
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
