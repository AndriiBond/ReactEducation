function Navigation(props) {
    const style= {
        marginTop: '100px'
    }

    const styleButtons = {
        width: '100px',
        height: '50px',
        border: '1px solid black',
        marginRight: '10px'
    };

    return (
      <div style={style}>
        <button className="prev-slide" style={styleButtons} ref={props.navigationPrevRef}>Prev</button>
        <button className="next-slide" style={styleButtons} ref={props.navigationNextRef}>Next</button>
      </div>
    );
  }
  
  export default Navigation;