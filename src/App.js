import React from "react";
import PostComponent from "./PostComponent";

class App extends React.Component {
  state = {
    content: " ",
    tags: " ",
    author: " ",
    data: [
      {
        number: 1,
        content: "Travel alone: see it for yourself!",
        tags: ["Culture&Lifestyle"],
        author: "Fanny Clausse"
      },
      {
        number: 2,
        content: 'How can we develop "permaculture',
        tags: [" Wellness&Health"],
        author: "Pierre Palencher"
      },
      {
        number: 3,
        content: "Create your own fashion style and stop stan smith",
        tags: ["Art&Design"],
        author: "Soukaina Hafidi"
      }
    ]
  };

  handleChangeContent = event => {
    this.setState({ content: event.target.value });
  };
  handleChangeTag = event => {
    this.setState({ tags: event.target.value });
  };

  handleChangeAuthor = event => {
    this.setState({ author: event.target.value });
    console.log(this.state.author);
  };

  render() {
    return (
      <div>
        <h1>Posts app</h1>
        <div className="twoComponents">
          <div className="Component1">
            <h3>Add post</h3>
            <div className="container1">
              <form>
                <label className="label">
                  Content
                  <textarea
                    className="textarea"
                    value={this.state.content}
                    onChange={this.handleChangeContent}
                  ></textarea>
                </label>
                <label className="label">
                  Tags
                  <input
                    className="input"
                    type="text"
                    value={this.state.tags}
                    onChange={this.handleChangeTag}
                  />
                </label>
                <label className="label">
                  Author
                  <input
                    className="input"
                    type="text"
                    value={this.state.author}
                    onChange={this.handleChangeAuthor}
                  />
                </label>
              </form>
              <button
                className="button"
                onClick={() => {
                  const changedData = [...this.state.data];
                  changedData.push({
                    content: this.state.content,
                    tag: [this.state.tag],
                    author: this.state.author
                  });
                  this.setState({
                    content: " ",
                    tags: " ",
                    author: " ",
                    data: changedData
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            <PostComponent data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
