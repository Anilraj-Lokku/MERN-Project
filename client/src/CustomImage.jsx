export default function CustomImage({ src, ...rest }) {
  src =
    src && src.startsWith("http")
      ? src
      : "https://anil-booking-app.vercel.app/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}
