
import MainLayout from "../layouts/MainLayout";
import PATH from "./constant";
import Home from "../pages/Home/Home";

export const Routes = [
  {
    path: PATH.main,
    element: <MainLayout />,
    children: [
      {
        index: true,            
        element: <Home />
      },
    ]
    
  }
]