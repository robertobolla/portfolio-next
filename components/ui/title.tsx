interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="text-2xl text-white my-10">{title}</h1>;
};

export default Title;
