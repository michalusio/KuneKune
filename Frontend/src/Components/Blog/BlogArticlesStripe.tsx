import styles from "./BlogArticlesStripe.module.scss";
import BlogArticle from "./BlogArticleThumbnail";


const BlogArticlesStripes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogArticle}>
        <BlogArticle />
      </div>
      <div className={styles.blogArticle}>
        <BlogArticle />
      </div>
    </div>
  );
};

export default BlogArticlesStripes;
