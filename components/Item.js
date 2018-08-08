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

const contentStyle = {
  marginLeft: "1em"
};

const nameStyle = {
  marginLeft: "1em",
  marginRight: "1em"
};

const rateStyle = {
  marginLeft: "2em"
};

const Item = props => {
  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <p>No.{props.idx + 1}</p>
        <a href={props.url} target="_blank">
          <p style={nameStyle}>{props.name}</p>
        </a>
        <p style={rateStyle}>{props.rate}</p>
      </div>
    </div>
  );
};

export default Item;
