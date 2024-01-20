import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={5} justifyContent={"space-between"}>
        <Sidebar />
        <Dashboard />
      </Stack>
    </Box>
  );
}

export default App;
