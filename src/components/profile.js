import React from "react";
import { connect } from "react-redux";
import firstAction from "../actions/simpleAction";

// mapDispatchToProps
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => ({
  firstAction: string => dispatch(firstAction(string))
});

class Profile extends React.Component {
  componentDidMount() {
    this.props.firstAction("Greetings Customer");
    console.log("mounted");
  }

  render() {
    return <>Hello, We are happy to meet you!</>;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Profile);
