import './Wrapper.css';

function Wrapper(props) {
  return ( 
    <div className="wrapper">
        {props.content}
    </div>
  );
}

export default Wrapper;
