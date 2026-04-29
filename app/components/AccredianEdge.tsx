import Edge from "./Edge";
import Domain from "./Domain";
import Courses from "./Courses";
import Features from "./Features";

export default function AccredianEdge() {
  return (
    <section id="edge" className="space-y-20">
      <Edge />
      <Domain />
      <Courses />
      <Features/>
    </section>
  );
}