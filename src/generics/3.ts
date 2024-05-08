export {};
function merge<T>(objA: T, objB: T): T | undefined {
  return Object.assign(objA, objB);
}

// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
