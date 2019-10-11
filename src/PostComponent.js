import React from "react";

class PostComponent extends React.Component {
  state = {
    unsorted: true
  };

  /* function linked to the sort method to compare the tags strings*/
  Compare = (a, b) => {
    const tagsA = a.tags;
    const tagsB = b.tags;

    let comparison = 0;
    if (tagsA > tagsB) {
      comparison = 1;
    } else if (tagsA < tagsB) {
      comparison = -1;
    }
    return comparison;
  };

  isTrue = () => {
    this.setState({ unsorted: false });
  };

  render() {
    /* create a copy of the data to sort*/
    const myData = [...this.props.data].sort(this.Compare);
    return (
      <div className="component2">
        <h3>View posts</h3>
        <div className="container2">
          <div className="btn">
            {/* on click the state value will change and modify the rendering of data */}
            <button className="button2" onClick={this.isTrue}>
              Sort by tag
            </button>
            <button className="button2">Sort by number</button>
          </div>
          {this.state.unsorted ? (
            <div>
              {this.props.data.map((element, index) => {
                return (
                  <div key={element.index} className="onePost">
                    <span className="contentPost">{element.content}</span>
                    <span className="authorPost">{element.author}</span>
                    <Line color="#d3d3d3" />
                    <span className="tagPost">{element.tags}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {myData.map((item, i) => (
                <div key={i}>
                  {item.content} {item.author}
                  {item.tags}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
/* Component to set the line in the middle of each rendered post*/
const Line = ({ color }) => (
  <hr
    style={{
      color: color,
      background: color,
      height: 0.5,
      width: 380
    }}
  />
);
export default PostComponent;
