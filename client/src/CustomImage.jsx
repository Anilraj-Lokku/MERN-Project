export default function CustomImage({ src, ...rest }) {
  src =
    src && src.includes("http://")
      ? src
      : "http://localhost:3000/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}
