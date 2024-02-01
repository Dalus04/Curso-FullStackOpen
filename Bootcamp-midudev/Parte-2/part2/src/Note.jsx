export const Note = (props) => {
    const {categories=[], content} = props
    return(
      <li>
        <p>{content}</p>
        {categories.map((category) => (
            <small key={category}>{category}</small>
        ))}
      </li>
    )
}