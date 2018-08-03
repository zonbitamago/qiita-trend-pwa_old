import { Divider } from "antd";

const Item = props => (
  <div>
    <Divider orientation="left">No.{props.idx + 1}</Divider>
    <a href={props.url} target="_blank">
      <p>{props.name}</p>
    </a>
    <p>{props.rate}</p>
  </div>
);

export default Item;
