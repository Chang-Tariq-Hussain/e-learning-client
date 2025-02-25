import React from "react";
import TextInput from "../../../components/common/input-field/TextInput";
import "./articles-page.scss";
import Articles from "./Articles";

const ArticlesPage: React.FC = () => {
  return (
    <div className="articles-page">
      <div className="top-content">
        <h2>Articles: Latest Features and Programming Languages</h2>
        <p>
          Subscribe to learn about latest tech in the world of computer science.
        </p>
        <TextInput
          placeholder="Enter your email"
          type="email"
          suffix={<button>Subscribe</button>}
          className="subscribe-field"
        />
      </div>
        <Articles/>
     
    </div>
  );
};

export default ArticlesPage;
