import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AppContextProvider } from "./context/CombineContextProvider";
import AppRoutes from "./AppRoutes";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes/>
        <Toaster richColors />
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default App
