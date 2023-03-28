import './ItemContainer.css';

function ItemContainer(props) {

  return ( 
    <div className="item-container">{props.children}</div>
  );
}

export default ItemContainer;
