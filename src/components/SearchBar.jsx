import { useState } from 'react';

const SearchBar = ({ width, height }) => {
  const [currentWidth, setCurrentWidth] = useState(`${width}px`);
  const [currentHeight, setCurrentHeight] = useState(`${height}px`);

  const handleWidthChange = (e) => {
    setCurrentWidth(e.target.value + 'px');
  };

  const handleHeightChange = (e) => {
    setCurrentHeight(e.target.value + 'px');
  };

  return (
    <div>
      <div
        className="-4"
        style={{ width: currentWidth, height: currentHeight }}>
        <textarea
          className="w-full h-full resize-none"
          placeholder="Buscar na loja"
        />
      </div>
    </div>
  );
};

export default SearchBar;
