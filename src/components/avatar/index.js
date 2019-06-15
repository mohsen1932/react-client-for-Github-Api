import React from "react";
import { AvatarBox } from "./styles";
import PropTypes from "prop-types";

const Avatar = props => {
  const { image, title } = props;
  return (
    <AvatarBox>
      <img src={image} alt={title} className="avatar-image" />
    </AvatarBox>
  );
};
Avatar.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};
export default Avatar;
