import React from "react";
import { Media } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const IssueList = ({ itemList }) => {
  return (
    <ul className="list-unstyled">
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <Media as="li" className="mt-4">
      <img
        width={150}
        height={150}
        className="mr-3"
        src={item.user.avatar_url}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{item.title}</h5>
        <div>
          <ReactMarkdown>
            {item.body.length <= 100 ? item.body : item.body.slice(0, 99)}
          </ReactMarkdown>
        </div>
        <span>
          Last update: <Moment fromNow>{item.updated_at}</Moment>
        </span>
      </Media.Body>
    </Media>
  );
};

export default IssueList;
