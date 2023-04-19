interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
}

const Post: React.FC<IProps> = ({ title, content }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content.substring(0, 100)}</p>
    </article>
  )
}

export default Post;