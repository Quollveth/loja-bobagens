const SearchBar = (props) => {
  return (
    <div>
      <div
        className="-4"
        style={{ width: props.width, height: props.height }}>
        <textarea
          className="w-full h-full resize-none"
          placeholder="Buscar na loja"
        />
      </div>
    </div>
  );
};

export default SearchBar;
