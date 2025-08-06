import { Apple, Dribbble, Facebook, Twitch } from "lucide-react";
import SocialLogin from "./SocialLogin";

function App() {
  const sns = [
    { backgroundColor: "#1877f2", icon: <Facebook />, social: "Facebook" },
    { backgroundColor: "#000000", icon: <Apple />, social: "Apple" },
    { backgroundColor: "#ea4c89", icon: <Dribbble />, social: "Dribble" },
    { backgroundColor: "#9146ff", icon: <Twitch />, social: "Twitch" },
  ];

  return (
    <>
      {sns.map((v) => (
        <SocialLogin {...v} />
      ))}
    </>
  );
}

export default App;
