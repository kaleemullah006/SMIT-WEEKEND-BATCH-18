import { useContext } from "react";
import UserContext from "./UserContext";

function ContextAPI() {

    const user = useContext(UserContext);
    
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
      </>
      
  );
}

export default ContextAPI;
