function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}

Card.defualtProps = {
  reverse: false,
}

export default Card