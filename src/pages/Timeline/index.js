import React, { useState, useEffect } from "react";
import twitterLogo from "../../twitter.svg";
import {
  TimelineWrapper,
  TimelineForm,
  TimelineTextArea,
  TweetList
} from "./styles";
import api from "../../services/api";
import Tweet from "../../components/Tweet";
import socket from "socket.io-client";

export default function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("tweets");
      setTweets(response.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    function subscribeToEvents() {
      const io = socket("http://localhost:3333");

      io.on("tweet", data => {
        setTweets([data, ...tweets]);
      });

      io.on("like", data => {
        setTweets(tweets.map(tweet => (tweet._id === data._id ? data : tweet)));
      });
    }

    subscribeToEvents();
  }, [tweets]);

  const handleInputChange = event => {
    setNewTweet(event.target.value);
  };

  const handleNewTweet = async event => {
    if (event.keyCode !== 13) return;
    const content = newTweet;
    const author = localStorage.getItem("@GoTwitter:username");

    await api.post("tweets", { content, author });

    setNewTweet("");
  };

  return (
    <TimelineWrapper>
      <img height={24} src={twitterLogo} alt="GoTwitter" />
      <TimelineForm>
        <TimelineTextArea
          value={newTweet}
          onChange={handleInputChange}
          onKeyDown={handleNewTweet}
          placeholder="O que está acontecendo?"
        />
      </TimelineForm>

      <TweetList>
        {tweets.map(tweet => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </TweetList>
    </TimelineWrapper>
  );
}
