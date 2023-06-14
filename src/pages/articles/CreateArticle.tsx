import React from "react";
import {
  formPost,
  // getArticles
} from "../../api";
import DefaultPageContainer from "../../components/DefaultPageContainer";
// import { IArticle } from "../../interfaces/article/article";

export default function CreateArticle() { 

  const handleSubmit = () => {
    formPost<string>("/article", (res) => {
      console.log(res);
    });
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      return e
    }
  }; 

  return (
    <DefaultPageContainer>
      <div className="p-2 border">
        <form className="p-2 border" onSubmit={handleSubmit()}>
          <br />
          <Input name="title" label="Title" />
          <br />
          <Input name="description" label="Description" />
          <br />
          <label htmlFor={`in_body`}>Body</label>
          <br />
          <textarea
            className="border  px-1"
            name="body"
            id={`in_body`}
          ></textarea>
          <br />
          <button className="border mt-1 px-4 ">Send</button>
        </form>
      </div>
    </DefaultPageContainer>
  );
}

function Input(props: {
  name: string;
  label: string;
  htmlId?: string;
  type?: string;
}) {
  return (
    <>
      <label htmlFor={`in_${props.htmlId || props.name}`}>{props.label}</label>
      <br />
      <input
        className="border  px-1"
        type={props.type || "text"}
        aria-describedby={`help_${props.htmlId || props.name}`}
        id={`in_${props.htmlId || props.name}`}
        name={props.name}
      />
    </>
  );
}
