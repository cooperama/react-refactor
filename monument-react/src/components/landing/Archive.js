import { v4 as uuidv4 } from "uuid";
import Article from "./Article";
import articles from "../../articleData";

const Archive = (props) => {
  const articleComponents = articles.map((articleObj) => {
    return <Article key={Date.now()} data={articleObj} key={uuidv4()} />;
  });
  return (
    <div>
      <h2>From the Archive</h2>
      <div className="grid-wrapper articles">{articleComponents}</div>
    </div>
  );
};

export default Archive;
