const cardStyle = {
  marginBottom: "10px",
  overflow: "auto",
  minWidth: 0,
  marginRight: "10px",
  marginLeft: "10px",
  borderRadius: "5px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px #ccc"
};

const containerStyle = {
  display: "grid",
  gridTemplateRows: "44px 1fr"
};

const headerStyle = {
  paddingLeft: "1em",
  backgroundColor: "#55c500",
  color: "white",
  fontWeight: "bold"
};

const contentStyle = {
  paddingLeft: "1em"
};

const nameStyle = {
  marginLeft: "1em",
  marginRight: "1em"
};

const rateStyle = {
  marginLeft: "2em"
};

const Item = props => {
  if (props.isLoading) {
    return (
      <div style={cardStyle}>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    return (
      <div style={cardStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <p>No.{props.idx + 1}</p>
          </div>
          <div style={contentStyle}>
            <a href={props.url} target="_blank">
              <p style={nameStyle}>{props.name}</p>
            </a>
            <p style={rateStyle}>{props.rate}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Item;
