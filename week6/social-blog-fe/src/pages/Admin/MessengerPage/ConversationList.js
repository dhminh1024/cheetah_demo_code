import React, { useState, useEffect } from "react";
import SearchForm from "../../../components/SearchForm";
import PaginationBar from "../../../components/PaginationBar";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../../../redux/actions/user.actions";
import { Row, Col, Container, Table, Tabs, Tab, Media } from "react-bootstrap";
import Moment from "react-moment";
import ReactEmoji from "react-emoji";
import {
  messengerTabNames,
  conversationTypes,
} from "../../../config/constants";

const ConversationList = ({
  onlineUsers,
  handleClickFriend,
  handleClickConversation,
}) => {
  const [pageNum, setPageNum] = useState(1);
  const totalPageNum = useSelector((state) => state.user.totalPageNum);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [tabKey, setTabKey] = useState(messengerTabNames.CONVERSATIONS);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const users = useSelector((state) => state.user.users);
  const conversations = useSelector((state) => state.user.conversations);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
  };

  const handleChangeTab = (key) => {
    setTabKey(key);
    setPageNum(1);
  };

  useEffect(() => {
    switch (tabKey) {
      case messengerTabNames.FRIENDS:
        dispatch(userActions.friendsRequest(pageNum, 20, query));
        break;
      case messengerTabNames.CONVERSATIONS:
        dispatch(userActions.conversationsRequest(pageNum, 10, query));
        break;
      default:
        break;
    }
  }, [dispatch, pageNum, query, tabKey]);

  return (
    <Container fluid>
      <Row className="mb-2">
        <Col>
          <SearchForm
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmitSearch}
            loading={loading}
          />
        </Col>
      </Row>

      <Tabs activeKey={tabKey} onSelect={(k) => handleChangeTab(k)}>
        <Tab
          eventKey={messengerTabNames.CONVERSATIONS}
          title="Conversations"
        ></Tab>
        <Tab eventKey={messengerTabNames.FRIENDS} title="Friends"></Tab>
      </Tabs>

      <Row>
        <Col>
          <Table striped bordered hover>
            <tbody>
              {tabKey === messengerTabNames.FRIENDS
                ? users.map((user) => (
                    <tr
                      key={user._id}
                      className="mouse-hover"
                      onClick={() => handleClickFriend(user)}
                    >
                      <td>
                        <img
                          src={user.avatarUrl}
                          className="avatar-sm"
                          alt="avatar"
                        />{" "}
                        <span>{user.name}</span>
                        {onlineUsers.includes(user._id) ? (
                          <span className="text-success"> - online</span>
                        ) : (
                          <span className="text-muted"> - offline</span>
                        )}
                      </td>
                    </tr>
                  ))
                : conversations.map((conv) => (
                    <tr key={conv._id}>
                      <td>
                        {conv.type === conversationTypes.GLOBAL ? (
                          <div
                            className="mouse-hover"
                            onClick={() => handleClickConversation(conv)}
                          >
                            <h6>GLOBAL ROOM</h6>
                          </div>
                        ) : (
                          <Media
                            className="mouse-hover"
                            onClick={() => handleClickConversation(conv)}
                          >
                            <img
                              src={conv.to?.avatarUrl}
                              alt="User Avatar"
                              className="avatar-sm mr-3"
                            />
                            <Media.Body className="text-left">
                              <div>
                                <span>
                                  <strong>@{conv.to?.name}</strong>
                                </span>
                                <span className="text-secondary ml-2">
                                  {conv.lastMessageUpdatedAt && (
                                    <Moment fromNow>
                                      {conv.lastMessageUpdatedAt}
                                    </Moment>
                                  )}
                                </span>
                              </div>
                              <div className="content-body">
                                <p>{ReactEmoji.emojify(conv.lastMessage)}</p>
                              </div>
                            </Media.Body>
                          </Media>
                        )}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
            loading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ConversationList;
