import React from 'react';
import ScrollFade from './components/ScrollFade';
import Tools from './components/Tools';

const App = () => {

  const tools = [
    {tool_name: 'HTML5', src: './img/html5.png'},
    {tool_name: 'CSS', src: './img/css.png'},
    {tool_name: 'Javascript', src: './img/js.png'},
    {tool_name: 'PHP', src: './img/php.png'},
    {tool_name: 'React', src: './img/react.png'}
  ]
  return (
    <div className="">

      <div className=" bg-gray-700" style={{height: "800px"}}></div>
      
      <div className="flex items-center justify-center">
        {tools.map((item, index) => (
          <ScrollFade key={index} delay={index} direction="top">
            <Tools {...item} />
          </ScrollFade>
        ))}
      </div>
      

      

      
    </div>
  );
};

export default App;
