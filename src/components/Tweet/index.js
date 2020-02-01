import React from "react";
import like from "../../like.svg";
import dislike from "../../dislike.svg";
import {
  TweetWrapper,
  TweetAuthor,
  TweetContent,
  LikeButton,
  DislikeButton
} from "./styles";
import api from "../../services/api";

export default function Tweet(props) {
  const { tweet } = props;

  const handleLike = async () => {
    const { _id } = props.tweet;

    await api.post(`likes/${_id}`, {
      username: localStorage.getItem("@GoTwitter:username")
    });
  };

  return (
    <TweetWrapper>
      <TweetAuthor>{tweet.author}</TweetAuthor>
      <TweetContent>{tweet.content}</TweetContent>
      {tweet.usernamesLiked.includes(
        localStorage.getItem("@GoTwitter:username")
      ) ? (
        <DislikeButton type="button">
          <img src={dislike} alt="Like" onClick={handleLike} />
          {tweet.likes}
        </DislikeButton>
      ) : (
        <LikeButton type="button">
          <img src={like} alt="Like" onClick={handleLike} />
          {tweet.likes}
        </LikeButton>
      )}
    </TweetWrapper>
  );
}
