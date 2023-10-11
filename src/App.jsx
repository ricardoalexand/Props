import './App.css'

// CODE ALONG

// 1. Right now we have the `App` component, but we need one to hold the menu options. Let's create a new functional component called `IceCream` that returns a div tag. Can someone take me through the steps?

// 2. Inside the div tag, someone tell me how I'd create a list tag that displays a flavor using propName your prop 'flavor'?


export default function App() {
  
  // 3. Add three instances of the IceCream component that receive your flavor props: strawberry, chocolate, and vanilla. Can someone take me through the steps for this?
  
  return (
    <div className="app">
      <h1 className="title">Code Nation Creamery</h1>
      <div className="menu">
        <h2>Menu Choices:</h2>
      </div>
    </div>
  );
}
