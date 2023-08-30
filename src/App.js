import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "What is JSX?",
    text:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code."
  },
  {
    title: "What is a state in React?",
    text:
      "The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders."
  },
  {
    title: "What are stateless components?",
    text:
      "If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether."
  },
  {
    title: "What is Redux?",
    text:
      "Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management."
  },
  {
    title: "What are props in React?",
    text:
      "Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function."
  },
  {
    title: "What is useState() in React?",
    text:
      "The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling."
  },
  {
    title:
      "What is the purpose of callback function as an argument of setState()?",
    text:
      "The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action."
  },
  {
    title: "What are uncontrolled components?",
    text:
      "The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML."
  },
  {
    title: "What is Lifting State Up in React?",
    text:
      "When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components."
  },
  {
    title: "Why React uses className over class attribute?",
    text:
      "The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop."
  },
  {
    title: "Why we need to be careful when spreading props on DOM elements?",
    text:
      "When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props."
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1} </p>
      <p className="title"> {title}</p>
      <p className="icon">{isOpen ? "-" : "+"} </p>

      {isOpen && <div className="content-box">{children} </div>}
    </div>
  );
}
