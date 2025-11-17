import { useState } from "react";
import type { Monument, MonumentsDataJSON } from "./types";
import data from "./data/monuments.json";
import MonumentsList from "./components/MonumentsList/MonumentsList";
import MonumentsMap from "./components/MonumentsMap/MonumentsMap";
import { useQuery } from "@tanstack/react-query";
import Button from "./components/atomic/Button/Button";
import {
  fetchMonumentsButton,
  app,
  appNavColumn,
  appContentColumn,
  listWidget,
} from "./App.css";

// Use environment variables for API domain and port
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN || "localhost";
const API_PORT = import.meta.env.VITE_API_PORT || "3001";

const monumentsData: MonumentsDataJSON = data;
const monumentsDataArray: Monument[] = Object.entries(monumentsData).map(
  ([id, monument]) => ({
    ...monument,
    id,
  })
);

function App() {
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null
  );
  const [monumentsFetchCount, setMonumentsFetchCount] = useState(0);
  const updateActiveMonument = (id: string | null) => {
    const monument = monumentsDataArray.find((mon) => mon.id === id) || null;
    setSelectedMonument(monument);
  };

  const { data } = useQuery({
    queryKey: ["monumentsFetchCount"],
    queryFn: async () => {
      const response = await fetch(
        `http://${API_DOMAIN}:${API_PORT}/api/monuments`
      );
      return await response.json();
    },
    enabled: monumentsFetchCount > 0,
  });

  return (
    <div className={app}>
      <div className={appNavColumn}>
        <Button
          onClick={() => setMonumentsFetchCount((count) => count + 1)}
          label="Fetch Monuments"
          className={fetchMonumentsButton}
          disabled={monumentsFetchCount > 0}
        />
        <MonumentsList
          monuments={data || []}
          activeMonumentId={selectedMonument?.id || null}
          setActiveMonumentId={updateActiveMonument}
        />
      </div>
      <div className={appContentColumn}>
        <MonumentsMap activeMonument={selectedMonument} />
      </div>
    </div>
  );
}

export default App;
