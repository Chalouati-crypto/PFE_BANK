import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Admin from "./pages/Admin";
import Services from "./pages/Services";
import AddClient from "./pages/AddClient";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Acceuil />,
      },
      {
        path: "/Acceuil",
        element: <Acceuil />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/add",
        element: <AddClient />,
      },x
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          custom: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#FFFFFF",
            backgroundColor: "#1F1C23",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
