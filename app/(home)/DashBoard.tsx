import Schedule from "./(schedule)/Schedule";
import Electric from "./(electric)/Electric";
import Notice from "./(notice)/Notice";
import Commute from "./(commute)/Commute";
import Vacation from "./(vacation)/Vacation";

export default function DashBoard() {
  return (
    <div>
      <Electric />
      <Schedule />
      <Notice />
      <div>
        <Commute />
        <Vacation />
      </div>
    </div>
  );
}
