import type { Monument } from "../../types";
import { nav, navList, navItem, activeNavItem, navGroup } from "./MonumentsList.css";
import states from "../../data/statesHash.json";

interface MonumentsListProps {
  monuments: Monument[];
  activeMonumentId?: string | null;
  setActiveMonumentId: (id: string | null) => void;
}

const sortByState = (monuments: Monument[]) => {
  const monumentsbyState: { [key: string]: Monument[] } = {};
  monuments.forEach((monument) => {
    const stateName = states[monument.state as keyof typeof states];
    if (!monumentsbyState[stateName]) {
      monumentsbyState[stateName] = [];
    }
    monumentsbyState[stateName].push(monument);
  });
  return monumentsbyState;
};

function MonumentsList({ monuments, activeMonumentId, setActiveMonumentId }: MonumentsListProps) {
  if (monuments.length === 0) {
    return null;
  }
  const monumentsByState = sortByState(monuments);
  return (
    <nav className={nav}>
      {Object.entries(monumentsByState).map(([state, stateMonuments]) => (
        <>
        <div className={navGroup}>{state}</div>
        <ul key={state} className={navList}>
          {stateMonuments.map((monument) => (
            <li key={monument.id} className={monument.id === activeMonumentId ? activeNavItem : navItem} onClick={() => setActiveMonumentId(monument.id)}>
              {monument.city}, {monument.state}
            </li>
          ))}
        </ul>
        </>
      ))}
    </nav>
  );
}

export default MonumentsList;
