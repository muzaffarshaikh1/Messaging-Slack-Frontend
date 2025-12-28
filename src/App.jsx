import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AppContextProvider } from "./context/CombineContextProvider";
import AppRoutes from "./AppRoutes";
import Modals from "./components/organisms/Modals/Modals";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
      </AppContextProvider>
      <Toaster richColors />
    </QueryClientProvider>
  )
}

export default App
