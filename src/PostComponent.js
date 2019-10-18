import React from "react";
/* installation of lodash library to set up the sort functions*/
var _ = require("lodash");

class PostComponent extends React.Component {
  state = {
    unsorted: true,
    unsortedNumbers: false
  };

  isTrue = () => {
    this.setState({ unsorted: false, unsortedNumbers: false });
  };
  areUnsortedNumbers = () => {
    this.setState({ unsortedNumbers: true, unsorted: false });
  };

  render() {
    /* creation of a new array with key tags sorted alphabetically*/
    const tabTags = _.orderBy(
      [...this.props.data],
      [
        item =>
          item.tags
            .toString()
            .trim()
            .toLowerCase()
      ],
      ["asc"]
    );
    /* creation of a new array with key number sorted in ascending order */
    const tabNumbers = _.orderBy(
      [...this.props.data],
      [item => item.number],
      ["asc"]
    );
    return (
      <div className="component2">
        <h3>View posts</h3>
        <div className="container2">
          <div className="btn">
            {/* by clicking on buttons the state values will change and modify the rendering of data */}
            <button className="button2" onClick={this.isTrue}>
              Sort by tag
            </button>
            <button className="button2" onClick={this.areUnsortedNumbers}>
              Sort by number
            </button>
          </div>
          {this.state.unsorted ? (
            <div>
              {this.props.data.map(element => {
                return (
                  <div key={element.author} className="onePost">
                    <span className="authorPost">{element.author}</span>
                    <span className="contentPost">{element.content}</span>
                    <Line color="#D7D7D7" />
                    <span className="tagPost">{element.tags}</span>
                  </div>
                );
              })}
            </div>
          ) : this.state.unsortedNumbers ? (
            <div>
              {tabNumbers.map(element => {
                return (
                  <div key={element.author} className="onePost">
                    <span className="authorPost">{element.author}</span>
                    <span className="contentPost">{element.content}</span>
                    <Line color="#D7D7D7" />
                    <span className="tagPost">{element.tags}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {tabTags.map(item => (
                <div key={item.author} className="onePost">
                  <span className="authorPost">{item.author}</span>
                  <span className="contentPost">{item.content}</span>
                  <Line color="#D7D7D7" />
                  <span className="tagPost">{item.tags}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
/*Component to set the line in the middle of each rendered post*/
const Line = ({ color }) => (
  <hr
    style={{
      color: color,
      background: color,
      height: 0.05,
      width: 420
    }}
  />
);
export default PostComponent;
