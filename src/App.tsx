import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./router/Router";

export default function App() {
  return(
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}
