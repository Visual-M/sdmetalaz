interface OurLocationProps {
  width: string;
  height: string;
}

export default function OurLocation({ width, height }: OurLocationProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0904769649383!2d49.7513747!3d40.3181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307fc3c757fbc1%3A0x183f50fac5057664!2sSD%20Metal%20MMC!5e0!3m2!1sru!2saz!4v1723474326059!5m2!1sru!2saz"
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
