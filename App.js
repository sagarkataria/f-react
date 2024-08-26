import React from 'react'
import ReactDOM from 'react-dom/client';

// React Element
const Title = (
    <h1 className='head' tabIndex="1">
        React using Jsx
    </h1>
);

// React functional components
const HeadingComponent = () => (
    <div id='container'>
        {Title}
        <h1>React function components</h1>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'));
// render functional components like this
root.render(<HeadingComponent />);

// render react element like this

// root.render(title);