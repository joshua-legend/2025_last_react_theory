const Button = (props) => {
  const bgObj = {
    primary: "#205BF3",
    secondary: "#478DF5",
  };
  const brObj = {
    hard: "0px",
    smooth: "5px",
    circle: "10px",
  };
  const buttonStyle = {
    padding: "10px 45px",
    color: "white",
    backgroundColor: bgObj[props.backgroundColor],
    borderRadius: brObj[props.borderRadius],
    border: "none",
  };
  return <button style={buttonStyle}>Button</button>;
};

export default Button;
