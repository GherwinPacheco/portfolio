import React from 'react';
import ScrollFade from './components/ScrollFade';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-8">Scroll to see the directional fade effect</h1>
      <div style={{ height: '100vh' }}></div> {/* Space to enable scrolling */}
      <ScrollFade direction="left" className="bg-blue-500 text-white p-6">
        This container fades in from the left and out to the left on scroll.
      </ScrollFade>
      <div style={{ height: '100vh' }}></div> {/* Space to enable scrolling */}
      <ScrollFade direction="top" className="bg-green-500 text-white p-6">
        This container fades in from the top and out to the top on scroll.
      </ScrollFade>
      <div style={{ height: '100vh' }}></div> {/* Space to enable scrolling */}
      <ScrollFade direction="bottom" className="bg-red-500 text-white p-6">
        This container fades in from the bottom and out to the bottom on scroll.
      </ScrollFade>
      <div style={{ height: '100vh' }}></div> {/* Space to enable scrolling */}
      <ScrollFade direction="right" className="bg-yellow-500 text-white p-6">
        This container fades in from the right and out to the right on scroll.
      </ScrollFade>
    </div>
  );
};

export default App;
