import GrandChildContext from "./grandChild";
import NameContext from "../Context/NameContext";

function ChildContext() {
  return (
    <>
      <div>
        <GrandChildContext />
      </div>
    </>
  );
}

export default ChildContext;
