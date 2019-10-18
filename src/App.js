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
      },
      {
        number: 4,
        content: "Instagram, or the new fashion show",
        tags: ["Art&Design"],
        author: "Yasmine Boussaid"
      },
      {
        number: 5,
        content: "Break frontiers through culture",
        tags: [" Human&Relationship"],
        author: "Primrose Semilinko"
      },
      {
        number: 6,
        content: "Break frontiers through culture",
        tags: [" Human&Relationship"],
        author: "César Roussel"
      },
      {
        number: 1,
        content: "Music festivals, a way of gathering cultures",
        tags: ["Culture&Lifestyle"],
        author: "Agathe Lemoyne"
      },
      {
        number: 2,
        content: "Stop talking, start doing !",
        tags: [" Human&Relationship"],
        author: "Azzeddine Hassena"
      },
      {
        number: 3,
        content: "Teaching science for dummies",
        tags: [" Technology&Science"],
        author: "Raphaël Béroux"
      },
      {
        number: 4,
        content: "Understand the success of the french wine",
        tags: ["Culture&Lifestyle"],
        author: "Céleste Gaultier"
      },
      {
        number: 5,
        content: "The right cost of fair agriculture",
        tags: [" Wellness&Health"],
        author: "Jules Lettermann"
      },
      {
        number: 6,
        content: "How to form a band",
        tags: ["Art&Design"],
        author: "Simin Liu"
      },
      {
        number: 1,
        content: "Make a design DIY bookshelf for your studio",
        tags: ["Art&Design"],
        author: "Antoine Broudin"
      },
      {
        number: 2,
        content: "The right cost of fair agriculture",
        tags: [" Wellness&Health"],
        author: "Lucas Guilhot"
      },
      {
        number: 3,
        content: "Driving an assiociative project with friends",
        tags: [" Human&Relationship"],
        author: "Théodore Chauveaux"
      },
      {
        number: 4,
        content: "Enjoy highly complicated watches",
        tags: ["Art&Design"],
        author: "Jules Sesplugues"
      },
      {
        number: 5,
        content: "Understand murders in a family",
        tags: [" Human&Relationship"],
        author: "Elie Lafin"
      },
      {
        number: 6,
        content: "Analyse mass manipulation under dictatures",
        tags: [" Human&Relationship"],
        author: "Etienne Bourgeois"
      }
    ]
  };
  /* functions to get the inputs */
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
                    value={this.state.content}
                    onChange={this.handleChangeContent}
                  ></textarea>
                </label>
                <label className="label">
                  Tags
                  <input
                    type="text"
                    value={this.state.tags}
                    onChange={this.handleChangeTag}
                  />
                </label>
                <label className="label">
                  Author
                  <input
                    type="text"
                    value={this.state.author}
                    onChange={this.handleChangeAuthor}
                  />
                </label>
              </form>
              <button
                /* function to post the new information*/
                onClick={() => {
                  const changedData = [...this.state.data];
                  changedData.push({
                    content: this.state.content,
                    tags: [this.state.tags],
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
