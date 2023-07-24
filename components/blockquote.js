import PortableText from "react-portable-text";

export default function Blockquote({ author, quote }) {
  return(
    <blockquote>
      {author && (
        <cite>{author}</cite>
      )}
      {quote && (
        <PortableText content={quote} />
      )}
    </blockquote>
  )
}