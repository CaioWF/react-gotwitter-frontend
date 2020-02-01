import styled from "styled-components";

export const TweetWrapper = styled.div`
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 1px solid #eee;
`;

export const TweetAuthor = styled.strong`
  margin-top: 0;
  padding-top: 0;
  border: 0;
  font-weight: bold;
`;

export const TweetContent = styled.p`
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
`;
export const LikeButton = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  color: #697882;
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const DislikeButton = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  color: #db116f;
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
