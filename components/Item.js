import { Divider } from "antd";
import { Card } from "antd";

const cardStyle = {
  marginBottom: "10px",
  overflow: "auto",
  minWidth: 0,
  marginRight: "10px",
  marginLeft: "10px"
};
const bodyStyle = {
  padding: "0px"
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
    <Card bodyStyle={bodyStyle} style={cardStyle}>
      <Divider orientation="left">No.{props.idx + 1}</Divider>
      <a href={props.url} target="_blank">
        <p style={nameStyle}>{props.name}</p>
      </a>
      <p style={rateStyle}>{props.rate}</p>
    </Card>
  );
};

export default Item;
