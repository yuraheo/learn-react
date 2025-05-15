1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
get put inside the div with the id of "root" 

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
An object!

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
you can't have multiple elements rendered without a parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
You tell it what to do, not how to do

5. What does it mean for something to be "composable"?

Break big compoment into smaller pieces