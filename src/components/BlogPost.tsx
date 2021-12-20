
export interface BlogPostProps {
  title: string;
  author: string;
  publishDate: string;
  heroImage: string;
  alt: string;
  html: string
}

function publishDateToMachineFriendlyDate(publishDate: string) {
  return new Date(publishDate).toISOString()
}

function BlogPost(props: BlogPostProps) {
    const { title, html, author, publishDate, heroImage, alt } = props;
    const machineFriendlyDate = publishDateToMachineFriendlyDate(publishDate)

    return (
        <article style={{
            margin: "0 auto",
            padding: "1rem",
            maxWidth: "960px"
        }}>
            {heroImage && <img width="720" height="420" style={{ width: "100%", height: "auto" }} loading="lazy" src={heroImage} alt={alt} />}
            <h1>{title}</h1>
            <p>Last updated: <time dateTime={machineFriendlyDate}>{publishDate}</time></p>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </article>
    )
}

export default BlogPost
