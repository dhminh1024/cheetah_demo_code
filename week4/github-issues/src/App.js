import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import { ClipLoader } from "react-spinners";
import SearchForm from "./components/SearchForm";
import PaginationBar from "./components/PaginationBar";
import IssueList from "./components/IssueList";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("facebook/react");
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [issues, setIssues] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // searchInput = owner/repo
    const temp = searchInput.split("/");
    if (temp.length === 2) {
      setOwner(temp[0]);
      setRepo(temp[1]);
    } else {
      setErrorMessage("Wrong format of search input");
    }
  };

  useEffect(() => {
    if (!owner || !repo) return;
    const fetchIssueData = async () => {
      setLoading(true);
      try {
        const url = `https://api.github.com/repos/${owner}/${repo}/issues?page=${pageNum}&per_page=20`;
        const res = await fetch(url);
        const data = await res.json();
        if (res.status === 200) {
          const link = res.headers.get("link");
          if (link) {
            const getTotalPage = link.match(
              /page=(\d+)&per_page=\d+>; rel="last"/
            );
            if (getTotalPage) setTotalPageNum(Number(getTotalPage[1]));
          }
          setIssues(data);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
          setIssues([]);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchIssueData();
  }, [owner, repo, pageNum]);

  return (
    <>
      <PublicNavbar />
      <Container>
        <h1 className="text-center">Github Issues</h1>
        <SearchForm
          loading={loading}
          searchInput={searchInput}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
        />
        <div className="d-flex flex-column align-items-center">
          {errorMessage && (
            <Alert variant="danger" className="mt-4">
              {errorMessage}
            </Alert>
          )}
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
          />
        </div>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        ) : (
          <IssueList itemList={issues} />
        )}
      </Container>
    </>
  );
}

export default App;
