# Note
1. First letter of the component must be letter.
2. diffing algo and reconsciliation.
3. only one component (function) allowed to be default export
4. wrap named export components in { }

## HOOKs
>1.hooks are functions
>2.hooks function is predefined
3.parenthses is req
4.hooks allows you to state and other features without writing a class
6.hooks is easy to use

>two rules to use hooks

  1.only call hooks at the top level<p>all hooks inside loops,condition or nexted function.hook should always be used at the top level of react

  2.only call hooks from react function. you cant call hooks from regular js function instead you can call hooks

# note: we cant rerendenr or update the value declared in normal js variable

## counter application
>setCount((prev)=>): here "prev" target the latest state of the value
## useEffect method aapka code optimitze krne me help krta hai 
## useEfect - it is used to manage all the methods of lifecycle alone .
## useEffect will take 3 parameters , one is callback funcion and second is dependecy array 
>> if the dependency array is empty , then it will mount only once when the page is reload for the first time and that is the only tim it will show
