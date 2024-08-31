interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Main;
