import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import PaginationBar from "../../components/PaginationBar";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../../redux/actions/user.actions";
import { Button, Row, Col, Container, Table, Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { friendListTabNames, actionTypes } from "../../config/constants";

const FriendListPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const totalPageNum = useSelector((state) => state.user.totalPageNum);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [action, setAction] = useState("");
  const [targetId, setTargetId] = useState("");
  const [tabKey, setTabKey] = useState(friendListTabNames.ALL_USERS);
  const [sortBy, setSortBy] = useState({ key: "", ascending: -1 });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const users = useSelector((state) => state.user.users);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setAction("");
    setTargetId("");
    setQuery(searchInput);
  };

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };

  const handleChangeTab = (key) => {
    setTabKey(key);
    setPageNum(1);
    setAction("");
    setTargetId("");
  };

  useEffect(() => {
    switch (tabKey) {
      case friendListTabNames.FRIENDS:
        dispatch(userActions.friendsRequest(pageNum, 10, query, sortBy));
        break;
      case friendListTabNames.SENT_REQUESTS:
        dispatch(userActions.getSentRequests(pageNum, 10, query, sortBy));
        break;
      case friendListTabNames.RECEIVED_REQUEST:
        dispatch(userActions.getReceivedRequests(pageNum, 10, query, sortBy));
        break;
      case friendListTabNames.ALL_USERS:
        dispatch(userActions.usersRequest(pageNum, 10, query, sortBy));
        break;
      default:
        break;
    }
  }, [dispatch, pageNum, query, sortBy, tabKey]);

  useEffect(() => {
    switch (action) {
      case actionTypes.ADD_FRIEND:
        dispatch(userActions.addFriend(targetId));
        break;
      case actionTypes.REMOVE_FRIEND:
        dispatch(userActions.removeFriend(targetId));
        break;
      case actionTypes.DECLINE_REQUEST:
        dispatch(userActions.declineRequest(targetId));
        break;
      case actionTypes.ACCEPT_REQUEST:
        dispatch(userActions.acceptRequest(targetId));
        break;
      case actionTypes.CANCEL_REQUEST:
        dispatch(userActions.cancelRequest(targetId));
        break;
      default:
        break;
    }
  }, [dispatch, action, targetId]);

  const handleActionClick = (actionType, userId) => {
    setAction(actionType);
    setTargetId(userId);
  };

  const generateActions = (user) => {
    if (tabKey === friendListTabNames.FRIENDS) {
      // Generate Remove Friend Button
      return (
        <Button
          variant="danger"
          onClick={() => handleActionClick(actionTypes.REMOVE_FRIEND, user._id)}
        >
          <FontAwesomeIcon icon="trash-alt" size="1x" /> Remove Friend
        </Button>
      );
    }

    if (tabKey === friendListTabNames.SENT_REQUESTS) {
      return (
        <Button
          variant="danger"
          onClick={() =>
            handleActionClick(actionTypes.CANCEL_REQUEST, user._id)
          }
        >
          <FontAwesomeIcon icon="trash-alt" size="1x" /> Cancel
        </Button>
      );
    }

    if (tabKey === friendListTabNames.RECEIVED_REQUEST) {
      return (
        <>
          <Button
            variant="success"
            onClick={() =>
              handleActionClick(actionTypes.ACCEPT_REQUEST, user._id)
            }
          >
            <FontAwesomeIcon icon="check-square" size="1x" /> Accept
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              handleActionClick(actionTypes.DECLINE_REQUEST, user._id)
            }
          >
            <FontAwesomeIcon icon="times-circle" size="1x" /> Decline
          </Button>
        </>
      );
    }

    if (tabKey === friendListTabNames.ALL_USERS) {
      if (user.friendship?.status === "accepted") {
        return (
          <span className="text-success">
            <FontAwesomeIcon icon="check-square" size="sm" /> Friend
          </span>
        );
      } else if (user.friendship?.status === "requesting") {
        return (
          <span className="text-warning">
            <FontAwesomeIcon icon="pause-circle" size="sm" /> Requesting
          </span>
        );
      } else {
        return (
          <Button
            variant="primary"
            onClick={() => handleActionClick(actionTypes.ADD_FRIEND, user._id)}
          >
            <FontAwesomeIcon icon="plus" size="1x" /> Add Friend
          </Button>
        );
      }
    }
  };

  return (
    <Container fluid>
      <h4 className="mt-3">Friend Manage</h4>
      <Row>
        <Col md={4}>
          <SearchForm
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmitSearch}
            loading={loading}
          />
        </Col>
        <Col
          md={8}
          className="d-flex justify-content-between align-items-start"
        ></Col>
      </Row>

      <Tabs activeKey={tabKey} onSelect={(k) => handleChangeTab(k)}>
        <Tab eventKey={friendListTabNames.FRIENDS} title="Friends"></Tab>
        <Tab
          eventKey={friendListTabNames.SENT_REQUESTS}
          title="Sent Requests"
        ></Tab>
        <Tab
          eventKey={friendListTabNames.RECEIVED_REQUEST}
          title="Received Requests"
        ></Tab>
        <Tab eventKey={friendListTabNames.ALL_USERS} title="All Users"></Tab>
      </Tabs>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Avatar</th>
                <th className="mouse-hover" onClick={() => handleSort("name")}>
                  Name <FontAwesomeIcon icon="sort" size="sm" />
                </th>
                <th className="mouse-hover" onClick={() => handleSort("email")}>
                  Email <FontAwesomeIcon icon="sort" size="sm" />
                </th>
                <th
                  className="mouse-hover"
                  onClick={() => handleSort("friendCount")}
                >
                  Friend Count <FontAwesomeIcon icon="sort" size="sm" />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="text-center">
                    <img
                      src={user.avatarUrl}
                      className="avatar-sm"
                      alt="avatar"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.friendCount}</td>
                  <td>{generateActions(user)}</td>
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

export default FriendListPage;
