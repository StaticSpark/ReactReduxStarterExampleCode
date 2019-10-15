import React from "react";
import { connect } from "react-redux";
import Profile from "../components/profile";

const mapStateToProps = state => {
  return { first: state.first };
};

class about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>About Us</div>
        <p>{this.props.first}</p>
        <Profile />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(about);
