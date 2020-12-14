import React from "react";
import { Media } from "react-bootstrap";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import ReactEmoji from "react-emoji";

const Message = ({ msg }) => {
  const currentUser = useSelector((state) => state.auth.user);
  return (
    <Media as="li">
      <img
        src={msg.user.avatarUrl}
        alt="User Avatar"
        className="avatar-sm mr-3"
      />
      <Media.Body className="text-left">
        <div>
          <span
            className={
              currentUser._id === msg.user._id ? "text-primary" : "text-success"
            }
          >
            <strong>@{msg.user.name}</strong>
          </span>
          <span className="text-secondary ml-2">
            <Moment fromNow>{msg.createdAt}</Moment>
          </span>
        </div>
        <div className="content-body">
          <p>{ReactEmoji.emojify(msg.body)}</p>
        </div>
      </Media.Body>
    </Media>
  );
};

export default Message;
