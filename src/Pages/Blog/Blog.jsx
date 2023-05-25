import React from "react";
import Pdf from "react-to-pdf";
import { BsDownload } from "react-icons/bs";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="flex flex-col items-start">
      <div>
        <Pdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="inline-flex items-center gap-2 font-semibold text-white bg-purple-600 px-5 py-3 rounded-md"
            >
              Download
              <BsDownload />
            </button>
          )}
        </Pdf>
      </div>

      <div className="flex flex-col justify-center gap-4 p-10 m-auto" ref={ref}>
        <h1 className="font-bold text-4xl">Frequently Asked Questions</h1>

        {/* Question no 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box md:w-1/2 ">
          <input type="checkbox" />
          <div className="collapse-title md: text-lg md:text-2xl font-bold">
            Q 1. Tell us the differences between uncontrolled and controlled
            components
          </div>
          <div className="collapse-content">
            <p className="text-purple-500">
              In react, controlled components is a component that controlled by
              react state. While an uncontrolled component is a component that
              maintains by its own internal state.
            </p>
          </div>
        </div>
        {/* Question no 2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box md:w-1/2 ">
          <input type="checkbox" />
          <div className="collapse-title text-lg md:text-2xl font-bold">
            Q 2. How to validate React props using PropTypes
          </div>
          <div className="collapse-content">
            <p className="text-purple-500">
              PropType is a package. its comes with react. PropType work key :
              value. key can be anything but value depend on developer what type
              of value he want. Example : [Title : PropType.string]. value can
              be an Array, Object, String, Number, Boolean{" "}
            </p>
          </div>
        </div>
        {/* Question no 3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box md:w-1/2 ">
          <input type="checkbox" />
          <div className="collapse-title text-lg md:text-2xl font-bold">
            Q 3. Tell us the difference between nodejs and express js
          </div>
          <div className="collapse-content">
            <p className="text-purple-500">
              Node.js is a JavaScript runtime environment built on the Chrome V8
              JavaScript engine. It allows developers to run JavaScript code on
              the server-side, outside of a web browser, and provides a number
              of built-in modules for things like file system access,
              networking, and cryptography. Express.js is a web framework built
              on top of Node.js. It provides a set of tools and features for
              building web applications, including middleware, routing, and
              templating.{" "}
            </p>
          </div>
        </div>
        {/* Question no 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box md:w-1/2 ">
          <input type="checkbox" />
          <div className="collapse-title text-lg md:text-2xl font-bold">
            Q 4. What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content">
            <p className="text-purple-500">
              In react a custom hook is simply a function that allows developers
              to extract and reuse logic between multiple components. a custom
              hook is simple function that uses on or more of the built in react
              hooks, react hooks are Reusable, Abstraction and Composition,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
