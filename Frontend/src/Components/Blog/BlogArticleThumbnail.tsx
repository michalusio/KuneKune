import styles from './BlogArticleThumbnail.module.scss';
import Button from '../Button/Button';

const BlogArticle = () => {
  return (
    <div>
      <div className={styles.blogTextAboveImage}>
    <h3> This is a test</h3>
    </div>
      <div className={styles.blogImageContainer}></div>
      <div className={styles.blogContainerHoldingText}>
        <h2>Kunekune Pigs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
        <Button extraClass={styles.blogButton} onClick={() => console.log("Button clicked")}>CONTINUE READING</Button>
      </div>
    </div>
  );
};

export default BlogArticle;
