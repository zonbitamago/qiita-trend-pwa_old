const Item = props => {
  const cardClassName = "item_cardStyle item_card" + props.idx;
  if (props.isLoading) {
    return (
      <div className={cardClassName}>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className={cardClassName}>
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
