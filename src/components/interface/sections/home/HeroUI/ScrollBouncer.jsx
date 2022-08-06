export default function ScrollBouncer({ displayCondition, children }) {
  return (
    <small
      className={`${displayCondition ? "right-0 md:right-6" : "right-0"
        } absolute bottom-16 animate-xBounce whitespace-nowrap leading-none tracking-widest`}
    >
      {children}
    </small>
  );
}
