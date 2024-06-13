const Container = ({children, className=''}) => {
  return (
    <section className={`container ${className}`}>{children}</section>
  )
}

export default Container