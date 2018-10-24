import "./Item.css";

const Item = props => {
  if (props.isLoading) {
    return (
      <div className="item_cardStyle">
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="item_cardStyle">
        <div className="item_containerStyle">
          <div className="item_headerStyle">
            <p>
              No.
              {props.idx + 1}
            </p>
          </div>
          <div className="item_contentStyle">
            <p className="item_nameStyle">
              <a href={props.url} target="_blank" rel="noreferrer">
                {props.name}
              </a>
              &nbsp;(
              {props.rate}
              いいね)
            </p>
            <p className="item_addInfoStyle">
              by&nbsp;
              {props.user}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Item;
