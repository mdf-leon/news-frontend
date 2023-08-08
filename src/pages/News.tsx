import React from "react";
import { IArticle } from "../interfaces/article";
import DefaultPageContainer from "../components/DefaultPageContainer";
import Article from "./Article";
import { getArticles } from "../api";

// index list of articles page
export default function News() {
  // `/News/UpdateArticle/${props.id}`
  const [allNews, setallNews] = React.useState<IArticle[]>([]);

  const initialFetch = async () => {
    const articles = await getArticles();
    setallNews(articles);
  };

  React.useEffect(() => {
    initialFetch();
  }, []);

  return (
    <DefaultPageContainer>
      <div className="p-2 border container my-10">
        <section>
          <h1>Relevant</h1>
          <RelevantSection />
        </section>
        <section>
          <h1>Latest</h1>
          <LatestSection />
        </section>
        <AdsHorizontalHomeSection />
        <NewsList news={allNews} />
      </div>
    </DefaultPageContainer>
  );
}
// function Article() {
// }
function RelevantSection() {
  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-1 h-64">
      <div className="box-border w-128 border">section 1 big squareh</div>
      <div className="box-border w-128">
        <div className="box-border h-32 border">section 2 small rectangle</div>
        <div className="box-border h-32 flex">
          <div className="box-border border flex-1">
            section 3 smaller rectangle
          </div>
          <div className="box-border border flex-1">
            section 4 smaller rectangle
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestSection() {
  return (
    <div className="">
      <div className="box-border w-128 border">section 1 big squareh</div>
      <div className="grid gap-4 grid-cols-2 grid-rows-1 mt-4">
        <div className="box-border h-32 border">section 2 small rectangle</div> 
        <div className="box-border h-32 border">section 3 small rectangle</div> 
        <div className="box-border h-32 border">section 4 small rectangle</div> 
        <div className="box-border h-32 border">section 5 small rectangle</div> 
        <div className="box-border h-32 border">section 6 small rectangle</div> 
        <div className="box-border h-32 border">section 7 small rectangle</div> 
      </div>
    </div>
  );
}

function AdsHorizontalHomeSection() {
  return (
    <div className="grid gap-4 grid-cols-6 grid-rows-1 h-10 my-2">
      <div className="box-border border flex-1">
        ad1
      </div>
      <div className="box-border border flex-1">
        ad2
      </div>
      <div className="box-border border flex-1">
        ad3
      </div>
      <div className="box-border border flex-1">
        ad4
      </div>
      <div className="box-border border flex-1">
        ad5
      </div>
      <div className="box-border border flex-1">
        ad6
      </div>
    </div>
  );
}

function NewsList(
  props: { news: IArticle[] } & React.ComponentPropsWithoutRef<"div">
) {
  const { news, ...rest } = props;
  if (news)
    return (
      <div {...rest}>
        {news.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </div>
    );
  return null;
}

// function Article(props: IArticle, index?: number | undefined) {
//   const [user] = useLSState<IUser>("user");

//   const handleDelete = (id: string | number) => {
//     return async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//       e.preventDefault();
//       const response = await deleteArticle(id);
//       console.log(response);
//       return e;
//     };
//   };

//   return (
//     <div className="border flex p-2" key={index}>
//       <img src="https://picsum.photos/100" alt="news article" />
//       <div className="ml-2">
//         <p>{props.title}</p>
//         <p>{props.author}</p>
//         <p>{props.description}</p>
//         {user ? (
//           <div>
//             <a href={`/News/UpdateArticle/${props.id}`}>edit</a>
//             <button onClick={handleDelete(props.id)}>delete</button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }
