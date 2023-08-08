import React from "react";
import { deleteArticle,  } from "../api";
import { IArticle } from "../interfaces/article";
import { IUser } from "../interfaces/user";
import useLSState from "../hooks/useLSState";

// index list of articles page
export default function Article(props: IArticle) {
  const { id, title, description, author, ...rest } = props;
  const [user] = useLSState<IUser>("user");

  // {  "id": 4,  "username": "a@b.c",  "email": "a@b.c"} this is an example IUser, make the interface:
  // and use it in the useLSState hook above


  const handleDelete = (id: string | number) => {
    return async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const response = await deleteArticle(id);
      console.log(response);
      return e;
    };
  };

  return (
    <div className="border flex p-2" {...rest}>
      <img src="https://picsum.photos/100" alt="news article" />
      <div className="ml-2">
        <p>{title}</p>
        <p>{author}</p>
        <p>{description}</p>
        {user ? (
          <div>
            <a href={`/News/UpdateArticle/${id}`}>edit</a>
            <button onClick={handleDelete(id)}>delete</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}