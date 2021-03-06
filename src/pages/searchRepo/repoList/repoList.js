import React, { Component } from "react";
import Loading from "../../../components/loading";
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ListUl, UserInfo, Text } from "./styles";
import PropTypes from "prop-types";
import Search from "../../../components/search";
import TopicsGenerator from "../../../utils/helpers/topicsGenerator";
import Avatar from "../../../components/avatar";

export class RepoList extends Component {
  state = {
    topics: ""
  };
  componentDidMount() {
        document.addEventListener("scroll", this.handleOnScroll);
  }
  componentWillUnmount() {
    const { set, setMoreItemsInCollection, setNextPage } = this.props;
    set([]);
    setMoreItemsInCollection(true);
    setNextPage(0);
    this.setState({
      topics: ""
    });
    document.removeEventListener("scroll", this.handleOnScroll);
  }
  handleLoadMore = () => {
    const { loading, get, next_page, more_items_in_collection } = this.props;
    const { topics } = this.state;
    if (!loading && more_items_in_collection) {
      get(topics,next_page);
    }
  };
  handleOnScroll = () => {
        const footer = document.querySelector(".footer");
        if (typeof footer !== "undefined" && footer !== null) {
            const footerHeight = footer.offsetHeight + 25;
            const scrollTop =
                (document.documentElement && document.documentElement.scrollTop) ||
                document.body.scrollTop;
            const scrollHeight =
                (document.documentElement && document.documentElement.scrollHeight) ||
                document.body.scrollHeight;
            const clientHeight =
                document.documentElement.clientHeight || window.innerHeight;
            const scrolledToBottom =
                Math.ceil(scrollTop + clientHeight + footerHeight) >= scrollHeight;
            if (scrolledToBottom) this.handleLoadMore();
        }
    };
  handleSearch = keyword => {
    const { get } = this.props;
    const topics = TopicsGenerator(keyword);
    this.setState({
      topics: topics
    });
    get(topics, 1);
  };
  renderFarm = (items = []) => {
    return items.map(item => {
      return (
        <li key={item.id}>
          <a href={item.html_url} target="_blank" rel="noopener noreferrer">
            <span className="avatar">
              <Avatar image={item.owner.avatar_url} title={item.owner.login} />
            </span>
            <UserInfo>
              <Text color={"name"} className="repo-name">
                {item.name}
              </Text>
              <Text color={"owner"}>
                <i className="fab fa-github" />
                <span className="owner-name">{item.owner.login}</span>
              </Text>
            </UserInfo>
          </a>
        </li>
      );
    });
  };
  render() {
    const { data, loading, failure, message, total_count } = this.props;
    const { topics } = this.state;
    return (
      <>
        <Search onFilter={this.handleSearch} />
        <div
          style={{
            textAlign: "center",
            padding: "0 1rem",
            fontSize: ".9rem",
            height: "30px"
          }}
        >
          {topics && !loading && !failure ? (
            total_count > 0 ? (
              <p>
                Found {total_count} results, Only the first 1000 search results
                are available via the Github Api.
              </p>
            ) : (
              <p>There is not any repositories with this keyword</p>
            )
          ) : (
            " "
          )}
        </div>

        <ListUl>
          {this.renderFarm(data)}
          <Loading isLoading={loading} />
        </ListUl>
        <div style={{ textAlign: "center", padding: "0 1rem" }}>
          {failure && !loading && (
            <>
              <p>{message}</p>
              <button className="btn try_again" onClick={this.handleLoadMore}>
                Try again
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.repoList.loading,
  failure: state.repoList.failure,
  message: state.repoList.message,
  data: state.repoList.data,
  total_count: state.repoList.total_count,
  next_page: state.repoList.next_page,
  more_items_in_collection: state.repoList.more_items_in_collection
});
const mapDispatchToProps = dispatch => {
  const { get, set, setMoreItemsInCollection, setNextPage } = actions;
  return bindActionCreators(
    { get, set, setMoreItemsInCollection, setNextPage },
    dispatch
  );
};
RepoList.propTypes = {
  loading: PropTypes.bool,
  failure: PropTypes.bool,
  message: PropTypes.string,
  data: PropTypes.array,
  next_page: PropTypes.number,
  more_items_in_collection: PropTypes.bool,
  total_count: PropTypes.number,
  get: PropTypes.func,
  set: PropTypes.func,
  setNextPage: PropTypes.func,
  setMoreItemsInCollection: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
