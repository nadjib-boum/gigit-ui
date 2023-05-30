interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>  {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div className={`max-w-6xl w-10/12 mx-auto`} {...props}>
      { children }
    </div>
  );
}

export default Container;