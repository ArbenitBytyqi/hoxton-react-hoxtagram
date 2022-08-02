import { ArticleComments } from "./ArticleComments";
import { ArticleImage } from "./ArticleImage";
import { ArticleTitle } from "./ArticleTitle";
import { LikeSeksion } from "./LikeSection";

export function Article() {
  return (
    <article className="image-card">
      <ArticleTitle />
      <ArticleImage />
      <LikeSeksion />
      <ArticleComments />
    </article>
  );
}
