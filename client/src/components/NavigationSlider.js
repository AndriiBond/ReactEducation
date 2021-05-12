import Translation from "./Translation";

function Navigation(props) {
    const style= {
        marginTop: '100px'
    }

    const styleButtons = {
        width: '95px',
        height: '50px',
        border: '1px solid black',
        marginRight: '10px'
    };

    return (
        <div style={style}>
          <button className="prev-slide" style={styleButtons} ref={props.navigationPrevRef}>
            <Translation resource="navigation.prev"/>
          </button>
          <button className="next-slide" style={styleButtons} ref={props.navigationNextRef}>
            <Translation resource="navigation.next"/>
          </button>
        </div>
    );
  }
  
  export default Navigation;