import '../styles/Header.css'; // automatically apply the styles to this component ONLY

const Header = (props) => {
  return (
    <div className={props.color}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
