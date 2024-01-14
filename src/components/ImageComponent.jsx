const ImageComponent = (props) => {
    return (
        <img
          src={props.src}
          alt={props.alt}
          style={{ height: `${props.height}px`, width: `${props.width}px` }}
        />
    );
};

export default ImageComponent;
