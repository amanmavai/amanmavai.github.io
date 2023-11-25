---
title: "Understanding JavaScript's Runtime: Call Stack, Web APIs, Event Loop, and Callback Queue"
description: "Dive deep into the mechanics of JavaScript's runtime environment. Learn how the Call Stack, Web APIs, Event Loop, and Callback Queue work together to handle synchronous and asynchronous tasks efficiently."
pubDate: "Nov 25 2023"
heroImage: "/javascript-runtime-explained.jpg"
---

Sure, let's delve deeper into the components of JavaScript's runtime environment: the Call Stack, Web APIs, and Callback Queue, using similar notations.

### Call Stack:

The Call Stack is where JavaScript executes function calls. It's a LIFO (Last In, First Out) structure.

- **Notation:**
  - **T1, T2, T3, etc.** for synchronous tasks or functions.
- **How It Works:**
  - When a function is called (e.g., `T1()`), it's pushed onto the stack.
  - The function is executed.
  - Once completed, it's popped off the stack.

### Example:

```javascript
function T1() {
  console.log("T1 executed");
}
function T2() {
  console.log("T2 executed");
}

T1(); // Push T1 onto the stack, execute, pop off
T2(); // Push T2 onto the stack, execute, pop off
```

### Web APIs:

Web APIs are provided by the browser (or environment like Node.js) and handle asynchronous operations like `setTimeout`, AJAX requests, and DOM events.

- **Notation:**
  - **A1, A2, A3, etc.** for asynchronous operations.
- **How It Works:**
  - When an async operation is initiated (e.g., `A1()`), it's handled by the Web APIs, not the Call Stack.
  - The Call Stack can continue executing other tasks without waiting for this operation.

### Example:

```javascript
setTimeout(() => console.log("A1 executed"), 1000); // Handled by Web APIs
console.log("T1 executed"); // Immediately executed on Call Stack
```

### Callback Queue:

The Callback Queue holds the callbacks from asynchronous operations that are ready to be executed.

- **Notation:**
  - **C1, C2, C3, etc.** for callbacks of completed asynchronous tasks.
- **How It Works:**
  - When an async operation in the Web APIs is completed, its callback (e.g., `C1()`) is placed in the Callback Queue.
  - The Event Loop checks this queue and the Call Stack.

### Event Loop:

The Event Loop checks if the Call Stack is empty and if there are any functions in the Callback Queue.

- If the Call Stack is empty and there's a function in the Callback Queue, it moves the function to the Call Stack to be executed.

### Visual Representation:

```
Call Stack       Web APIs           Callback Queue
---------       ----------          --------------
T1               A1 (e.g., setTimeout)

                 A1                  C1 (Once A1 is complete)
T2

                 A2                  C1, C2
T3

(T3 completes)
                 A2                  C1, C2

(Event Loop moves C1 to Call Stack)
C1                                     C2

(Event Loop moves C2 to Call Stack)
C2
```

### Conclusion:

- **Call Stack:** Where synchronous code is executed.
- **Web APIs:** Handle asynchronous operations without blocking the Call Stack.
- **Callback Queue:** Queues callbacks from completed asynchronous operations.
- **Event Loop:** Coordinates between the Call Stack and Callback Queue, ensuring asynchronous callbacks are executed at the right time.

This model allows JavaScript to handle both synchronous and asynchronous operations efficiently, crucial for creating responsive applications.
