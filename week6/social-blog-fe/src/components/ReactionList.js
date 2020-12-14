import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReactionList = ({
  reactionsData,
  targetType,
  targetId,
  handleEmojiClick,
  loading,
  size,
}) => {
  return (
    <div>
      <ul className="reactions">
        <li>
          <button
            onClick={() => handleEmojiClick(targetType, targetId, "like")}
            disabled={loading}
          >
            <FontAwesomeIcon icon="thumbs-up" size={size} />
          </button>
          {reactionsData?.like}{" "}
        </li>
        <li>
          <button
            onClick={() => handleEmojiClick(targetType, targetId, "love")}
            disabled={loading}
          >
            <FontAwesomeIcon icon="heart" size={size} />
          </button>
          {reactionsData?.love}{" "}
        </li>
        <li>
          <button
            onClick={() => handleEmojiClick(targetType, targetId, "laugh")}
            disabled={loading}
          >
            <FontAwesomeIcon icon="laugh" size={size} />
          </button>
          {reactionsData?.laugh}{" "}
        </li>
        <li>
          <button
            onClick={() => handleEmojiClick(targetType, targetId, "sad")}
            disabled={loading}
          >
            <FontAwesomeIcon icon="sad-cry" size={size} />
          </button>
          {reactionsData?.sad}{" "}
        </li>
        <li>
          <button
            onClick={() => handleEmojiClick(targetType, targetId, "angry")}
            disabled={loading}
          >
            <FontAwesomeIcon icon="angry" size={size} />
          </button>
          {reactionsData?.angry}{" "}
        </li>
      </ul>
    </div>
  );
};

export default ReactionList;
