import ProductCard from "./ProductCard"
import ProfileCard from "./ProfileCard"
import ReviewCard from "./ReviewCard"

function HocExcercise(props) {
  const Component = props.cmp;
  return (
    <>
      
      <div className="w-50 bg-blue-100 rounded-3xl text-center mt-4">
        <Component {...props} />
      </div>
    </>
  );
}
function HOCEXCERCISE() {
  return (
    <>
    <div className="flex flex-col gap-4 justify-center items-center ">

      <HocExcercise cmp={ProductCard} product="Laptop" price={30000} />
      <HocExcercise cmp={ReviewCard} reviewer="Ahmad" status="Bahot Acha" />
      <HocExcercise cmp={ProfileCard} name="kaleem" city="karachi" />
    </div>
    </>
  );
}
export default HOCEXCERCISE;
