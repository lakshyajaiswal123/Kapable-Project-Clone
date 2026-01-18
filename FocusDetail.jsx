import { useParams } from "react-router-dom";
import Think from "./Thinkable/Think";
// import Speak from "./Speakable/Speak";
// import Work from "./Workable/Work";

export default function FocusDetail() {
  const { index } = useParams();

  switch (index) {
    case "0":
      return <Think />;
    case "1":
      return <h1>Speakable Component</h1>;
    case "2":
      return <h1>Workable Component</h1>;
    default:
      return <h1>Page Not Found</h1>;
  }
}
