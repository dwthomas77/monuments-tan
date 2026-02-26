import { useState } from "react";
import type { Monument } from "./types";
import MonumentsList from "./components/MonumentsList/MonumentsList";
import MonumentsMap from "./components/MonumentsMap/MonumentsMap";
import { useQuery, useMutation } from "@tanstack/react-query";
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

function App() {
  const [monumentsFetchCount, setMonumentsFetchCount] = useState(0);
  const { data } = useQuery({
    queryKey: ["monumentsFetchCount"],
    queryFn: async () => {
      const response = await fetch(
        `http://${API_DOMAIN}:${API_PORT}/monuments`
      );
      const data = await response.json();
      return data?.monuments || [];
    },
    enabled: monumentsFetchCount > 0,
  });

  const createMonument = useMutation({
    mutationFn: async (monument) => {
      const response = await fetch('/todos', {
        method: "post",
        body: JSON.stringify(monument)
      })
      const data = await response.json();
    },
  })

  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(
    null
  );

  const updateActiveMonument = (id: number | null) => {
    const monument = data?.find((monument: Monument) => monument.id === id) || null;
    setSelectedMonument(monument);
  };

  
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
