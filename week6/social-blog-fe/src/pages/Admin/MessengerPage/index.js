import React, { useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import socketIOClient from "socket.io-client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import ConversationList from "./ConversationList";
import Message from "./Message";
import { socketTypes, conversationTypes } from "../../../config/constants";
import { toast } from "react-toastify";

let socket;

const MessengerPage = () => {
  const [globalMessages, setGlobalMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState({
    type: conversationTypes.GLOBAL,
  });
  const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (accessToken) {
      socket = socketIOClient(process.env.REACT_APP_BACKEND_API, {
        query: {
          accessToken,
        },
      });
      socket.emit(socketTypes.GLOBAL_MSG_INIT);
    }
    return () => {
      socket.disconnect();
    };
  }, [accessToken]);

  useEffect(() => {
    if (socket) {
      socket.on(socketTypes.NOTIFICATION, (data) => {
        if (data.onlineUsers) {
          setOnlineUsers(data.onlineUsers);
        }
        if (data.globalMessages) {
          setGlobalMessages(data.globalMessages);
        }
        if (data.selectedConversation) {
          console.log("init conversation", data);
          // !body mean initialization new private conversation
          setSelectedConversation((conv) => ({
            ...data.selectedConversation,
            type: conversationTypes.PRIVATE,
          }));
          setPrivateMessages(data.privateMessages);
        }
      });
      socket.on(socketTypes.GLOBAL_MSG_RECEIVE, (msg) => {
        setGlobalMessages((messages) => [...messages, msg]);
      });

      socket.on(socketTypes.PRIVATE_MSG_RECEIVE, (msg) => {
        console.log({ selectedConversation, msg });
        if (selectedConversation._id === msg.conversation) {
          setPrivateMessages((messages) => [...messages, msg]);
        } else {
          toast.info(`${msg.user.name} has sent you a message`);
        }
      });

      socket.on(socketTypes.ERROR, (err) => {
        toast.error(err);
      });
    }
    return () => {
      socket.off(socketTypes.NOTIFICATION);
      socket.off(socketTypes.GLOBAL_MSG_RECEIVE);
      socket.off(socketTypes.PRIVATE_MSG_RECEIVE);
      socket.off(socketTypes.ERROR);
    };
  }, [dispatch, selectedConversation]);

  const handleChangeMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (selectedConversation.type === conversationTypes.GLOBAL) {
      socket.emit(socketTypes.GLOBAL_MSG_SEND, {
        from: currentUser._id,
        body: newMessage,
      });
    } else {
      socket.emit(socketTypes.PRIVATE_MSG_SEND, {
        conversation: selectedConversation._id,
        from: currentUser._id,
        to: selectedConversation.to._id,
        body: newMessage,
      });
    }
    setNewMessage("");
  };

  const handleClickFriend = (friend) => {
    socket.emit(socketTypes.PRIVATE_MSG_INIT, {
      conversation: null,
      from: currentUser._id,
      to: friend._id,
    });
  };

  const handleClickConversation = (conversation) => {
    setSelectedConversation(conversation);
    if (conversation.type === conversationTypes.GLOBAL) {
      socket.emit(socketTypes.GLOBAL_MSG_INIT);
    } else {
      socket.emit(socketTypes.PRIVATE_MSG_INIT, {
        conversation: conversation._id,
        from: currentUser._id,
        to: conversation.to._id,
      });
    }
  };

  return (
    <Container fluid>
      <br />

      {selectedConversation.type === conversationTypes.GLOBAL ? (
        <>
          <h4>Global Room</h4>
          <h6 className="text-success">
            {onlineUsers && (
              <>
                {onlineUsers.length < 2
                  ? onlineUsers.length + " user online"
                  : onlineUsers.length + " users online"}
              </>
            )}
          </h6>
        </>
      ) : (
        <>
          <h4>
            <img
              src={selectedConversation.to?.avatarUrl}
              alt="User Avatar"
              className="avatar-sm mr-3"
            />
            <span>{selectedConversation.to?.name}</span>
          </h4>
          <h6>
            {onlineUsers.includes(selectedConversation.to?._id) ? (
              <span className="text-success"> online</span>
            ) : (
              <span className="text-muted"> offline</span>
            )}
          </h6>
        </>
      )}

      <Row>
        <Col md={8} className="pr-4 d-flex flex-column justify-content-between">
          <ScrollToBottom className="messages border mb-2">
            <ul className="list-unstyled">
              {selectedConversation.type === conversationTypes.GLOBAL
                ? globalMessages.map((msg) => (
                    <Message key={msg._id} msg={msg} />
                  ))
                : privateMessages.map((msg, i) => (
                    <Message key={msg._id} msg={msg} />
                  ))}
            </ul>
          </ScrollToBottom>
          <div>
            <Form onSubmit={handleSendMessage}>
              <Form.Row>
                <Col>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Type something.."
                    name="newMessage"
                    value={newMessage}
                    onChange={handleChangeMessage}
                  />
                </Col>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading || !newMessage}
                >
                  Send
                </Button>
              </Form.Row>
            </Form>
          </div>
        </Col>
        <Col md={4} className="p-3 border conversation-list">
          <ConversationList
            onlineUsers={onlineUsers}
            handleClickFriend={handleClickFriend}
            handleClickConversation={handleClickConversation}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MessengerPage;
