const SocialLogin = (props) => {
  const loginStyle = {
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    gap: "5px",
    color: "white",
    padding: "14px 16px",
    width: "fit-content",
    fontSize: "20px",
    fontWeight: "700",
    backgroundColor: props.backgroundColor,
  };

  return (
    <div style={loginStyle}>
      {props.icon} Login via {props.social}
    </div>
  );
};

export default SocialLogin;
