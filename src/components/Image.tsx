interface IProps {
  imageURL: string;
  className: string;
  alt: string;
}

const Image = ({ alt, className, imageURL }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} />;
};

export default Image