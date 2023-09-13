"use client";
import Image from "next/image";
import { EaseApp } from "agora-chat-uikit";
import next from "../../public/next.svg";
import React, { useEffect } from "react";
import {
  Chat,
  rootStore,
  Provider,
  ConversationList,
  useClient,
} from "chatuim2";
import "chatuim2/style.css";

const ChatApp = () => {
  const client = useClient();

  useEffect(() => {
    client
      ?.open?.({
        user: "zd2",
        agoraToken:
          "007eJxTYKiefXn/7nAJDemHT5d1sRx3O3NQJz6xOehntWt4d+zuh10KDGmGKcnm5hZJKSnJZiZmiSkWaUZmBpbmZsmJRikGhqbJ58sZUxsCGRlmda3vZ2RgZWAEQhBfhSHJwMwkMcXMQNfMyCRJ19AwNVnXItXQSNc0ycjEIsnA1CItyRIAF+4pBA==",
      })
      .then(() => {
        console.log("login success");
      })
      .catch((err) => {
        console.log("login failed", err);
      });
  }, [client]);

  return (
    <div className="container">
      <div className="conversation">
        <ConversationList />
      </div>
      <div className="chat">
        <Chat />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* <EaseApp /> */}
      <Provider
        initConfig={{
          appKey: "41117440#383391",
        }}
      >
        <ChatApp></ChatApp>
      </Provider>
    </main>
  );
}
