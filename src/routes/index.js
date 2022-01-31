import { Routes, Route } from "react-router-dom";
import CreateDeliveryPage from "../pages/delivery/CreateDeliveryPage";
import SettingsPage from "../pages/user/SettingsPage";
import ProfilePage from "../pages/user/ProfilePage";
import EditDeliveryPage from "../pages/delivery/EditDeliveryPage";
import PackagesListPage from "../pages/packages-list-page/PackagesListPage";
import Delivery from "../pages/delivery/Delivery";
import paths from "./paths";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.homePath} element={<ProfilePage />} />
      <Route path={paths.packagePath} element={<Delivery />} />
      <Route path={paths.createPackagePath} element={<CreateDeliveryPage />} />
      <Route path='/package/edit-package/:id' element={<EditDeliveryPage />} />
      <Route path={paths.settingsPath} element={<SettingsPage />} />
      <Route path={paths.packagesListpath} element={<PackagesListPage />} />
    </Routes>
  );
};
