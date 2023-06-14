import React from "react";
import { getArticle, postArticles } from "../../api";
import { handleInputChange } from "../../util/formUtils";
import { useParams } from "react-router-dom";
import DefaultPageContainer from "../../components/DefaultPageContainer";

export default function UpdateArticle() {
  let { id } = useParams();
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  // this function doesn't use formPost() as an example
  const handleSubmit = async () => {
    await postArticles({ email: title, password: description });
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // TODO: go back to previus page
      return e;
    };
  };

  // example of initial fetch without useInitialFetch()
  const initialFetch = async () => {
    const article = await getArticle(id!);
    setTitle(article.title);
    setDescription(article.description);
    setBody(article.body);
  };

  React.useEffect(() => {
    initialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultPageContainer>
      <div className="p-2 border">
        <form className="p-2 border" onSubmit={handleSubmit}>
          <br />
          <Input getter={title} setter={setTitle} name="title">
            Title
          </Input>
          <br />
          <Input
            getter={description}
            setter={setDescription}
            name="description"
          >
            Description
          </Input>
          <br />
          <label htmlFor={`in_body`}>Body</label>
          <br />
          <textarea
            className="border  px-1"
            name="body"
            id={`in_body`}
            value={body}
            onChange={handleInputChange(setBody)}
          ></textarea>
          <br />
          <button className="border mt-1 px-4 ">Send</button>
        </form>
      </div>
    </DefaultPageContainer>
  );
}

function Input(props: {
  getter: any;
  setter: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  children?: React.ReactNode;
  label?: string;
  htmlId?: string;
  type?: string;
}) {
  return (
    <>
      <label htmlFor={`in_${props.htmlId || props.name}`}>
        {props.children || props.label}
      </label>
      <br />
      <input
        className="border  px-1"
        type={props.type || "text"}
        aria-describedby={`help_${props.htmlId || props.name}`}
        id={`in_${props.htmlId || props.name}`}
        name={props.name}
        value={props.getter}
        onChange={handleInputChange(props.setter)}
      />
    </>
  );
}
