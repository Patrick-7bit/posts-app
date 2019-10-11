import React from "react";

class PostComponent extends React.Component {
  state = {
    unsorted: true
  };

  Compare = (a, b) => {
    /*const tagsA = a.tags;*/
    const tagsA = typeof a.tags === "string" ? a.tags.toUpperCase() : a.tags;
    /*const tagsB = b.tags;*/
    const tagsB = typeof b.tags === "string" ? b.tags.toUpperCase() : b.tags;

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
    const myData = [...this.props.data].sort(this.Compare);
    return (
      <div className="component2">
        <h3>View posts</h3>
        <div className="container2">
          <div className="btn">
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
