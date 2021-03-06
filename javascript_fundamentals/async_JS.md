# Explore asynchronicity and the event loop in Javascript

## Instructions

For each piece of code below:

1. Read the code.

2. Write down your prediction of what would happen if you run it (what will appear on the console, and in what order).

3. Run the code by pasting it in the console of your browser.

4. Compare the actual result with your predictions.

5. Using previous knowledge, given resources and the internet **explain what actually happened**.

### Resources:

* https://www.youtube.com/watch?v=8aGhZQkoFbQ
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

## Code

---

```
setTimeout(function() {
	console.log('hello')
}, 1000)
```
---

```
const callback = function() {
	console.log('hello')
}
setTimeout(callback, 1000)
```

---

```
console.log('A')

const callback = function() {
	console.log('B')
}

console.log('C')

setTimeout(callback, 1000)

console.log('D')
```

---

```
console.log('A')

const callback = function() {
	console.log('B')
}

console.log('C')

setTimeout(callback, 0)

console.log('D')
```

---

```
let a = 10

const callback = function() {
	a = 20
}

setTimeout(callback, 1000)

console.log(a)
```

---

```
let a = 10

const callback = function() {
	a = 20
}
setTimeout(callback, 0)

console.log(a)
```

---

```
let a = 10

const callback = function() {
	a = 20
	console.log(a)
}
setTimeout(callback, 0)
```

---

```
const callback = function() {
	return "hello"
}
setTimeout(callback, 2000)
```

## Reflection

* What is a callback?
* Can you explain why these are antipatterns:
  * having a callback that returns a value
  * having a callback that changes global state

[Here's a tool](http://latentflip.com/loupe) that help visualise the event loop.

**Bonus** - validate your understanding with a peer or coach.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/async_JS.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/async_JS.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/async_JS.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/async_JS.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=skills-workshops&prefill_File=javascript_fundamentals/async_JS.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
