import { Routes, Route } from "react-router-dom";
import SignIn from "./page/Sign-in";
import AuthLayout from "./Layout/AuthLayout";
import ProtectLayout from "./Layout/ProtectLayout";
import MyOrders from "./page/MyOrders";
import Users from "./page/Users";
import Plante from "./page/Plante";
import PlanteDetails from "./page/PlanteDetails";
import Category from "./page/Category";
import CategoryDetails from "./page/CategoryDetails";
import Create from "./page/Create";
import Coupon from "./page/Coupon";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<AuthLayout children={<SignIn />} />} />
      <Route
        path="/orders"
        element={<ProtectLayout children={<MyOrders />} />}
      />
      <Route path="/users" element={<ProtectLayout children={<Users />} />} />
      <Route path="/" element={<ProtectLayout children={<Plante />} />} />
      <Route
        path="/plantes/:id"
        element={<ProtectLayout children={<PlanteDetails />} />}
      />
      <Route
        path="/category"
        element={<ProtectLayout children={<Category />} />}
      />
      <Route
        path="/category/:id"
        element={<ProtectLayout children={<CategoryDetails />} />}
      />
      <Route path="/create" element={<ProtectLayout children={<Create />} />} />
      <Route path="/coupon" element={<ProtectLayout children={<Coupon/>}/>}/>
    </Routes>
  );
}

export default App;
