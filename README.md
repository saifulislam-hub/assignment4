1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are written below-

• getElementById() → Selects one element by its unique id.
• getElementsByClassName() → Selects all elements with the same class name (returns HTMLCollection).
• querySelector() → Selects the first matching element using CSS selector.
• querySelectorAll() → Selects all matching elements using CSS selector (returns NodeList).

2. How do you create and insert a new element into the DOM?

Answer: Use document createElement() to create a new element. Besides use appendChild() or append() to insert it into the DOM.

3. What is Event Bubbling? How does it work?

Answer: Event Bubbling means an event starts from the target element and moves up to its parent elements. It goes from child → parent → document.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation means adding one event listener to a parent element instead of many child elements. It is useful because it improves performance and works for dynamically added elements.

5. Difference between preventDefault() and stopPropagation().

Answer: Here preventDefault() Stops the default browser action (like form submit or link open). On the other hand, stopPropagation() → Stops the event from bubbling to parent elements.
