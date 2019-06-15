import React from "react";
import { LoadingRow, Avatar, UserInfo, Text } from "./styles";
import PropTypes from "prop-types";
import * as config from "../../utils/config";

const renderRows = () => {
  let rows = [];
  for (let i = 0; i < config.PER_PAGE; i++) {
    rows.push(
      <LoadingRow key={i} className="l-r">
        <Avatar className="loading-animate" />
        <UserInfo>
          <Text className="loading-animate" width={50} />
          <Text className="loading-animate" width={100} />
        </UserInfo>
      </LoadingRow>
    );
  }
  return rows;
};
const Loading = props => {
  const { isLoading } = props;
  return <>{isLoading && <div id="loading">{renderRows()}</div>}</>;
};
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
export default Loading;
