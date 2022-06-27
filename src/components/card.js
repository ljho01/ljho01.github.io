import * as React from "react"
import { Link } from "gatsby"
import "./card.css"
import { GatsbyImage } from "gatsby-plugin-image"

const card = (arg) => {
    const post = arg.post
    const title = arg.title
    let thumb
    if (post.frontmatter.thumbnail != null) {
        thumb = <><div className="post-card-upsec-filt"/><GatsbyImage image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt="Thumbnail"/></>
    }
    else {
        thumb = <div className="post-card-nothumbnail"><span>{post.frontmatter.category}</span></div>
    }
    return (
        <li key={post.fields.slug}>
            <Link to={`${post.frontmatter.category}${post.fields.slug}`} itemProp="url">
                <div className="post-card">
                    <div className="post-card-uppersection">{thumb}</div>
                    <div className="post-card-downsection">
                        <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                        >
                            <header>
                                <h2>
                                    <span itemProp="headline">{title}</span>
                                </h2>
                                <small>{post.frontmatter.date}</small>
                                {/* <Link to={`/${post.frontmatter.category}`}><span className="post-card-category"> {post.frontmatter.category}</span></Link> */}
                            </header>
                            <section>
                                <p
                                dangerouslySetInnerHTML={{
                                    __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                                />
                            </section>
                        </article>
                    </div>
                </div>
            </Link>
        </li>
    ) 
}


export default card