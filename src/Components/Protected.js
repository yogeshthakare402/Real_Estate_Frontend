import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  let token = localStorage.getItem("token");
  if (token === null) {
    token = "";
  }
  return <div>{token.length ? children : <Navigate to="/" />}</div>;
};
export default Protected;