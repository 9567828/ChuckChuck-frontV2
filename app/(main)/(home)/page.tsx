import Commute from "./(attendance)/Attendance";
import Electric from "./(electric)/Electric";
import Notice from "./(notice)/Notice";
import Schedule from "./(schedule)/Schedule";
import Vacation from "./(vacation)/Vacation";

export default function Home() {
  return (
    <div className="home-grid">
      <Electric />
      <Schedule />
      <Notice />
      <div className="vacation-wrap">
        <Commute />
        <Vacation />
      </div>
    </div>
  );
}
