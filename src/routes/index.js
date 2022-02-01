import { Routes, Route } from "react-router-dom";
import CreatePackagePage from "../pages/package-page/create-package-page";
import SettingsPage from "../pages/user/settings-page";
import ProfilePage from "../pages/user/profile-page";
import EditPackagePage from "../pages/package-page/edit-package-page";
import PackagesListPage from "../pages/packages-list-page/packages-list-page";
import PackagesPage from "../pages/package-page/packages-page";
import paths from "./paths";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.homePath} element={<ProfilePage />} />
      <Route path={paths.packagePath} element={<PackagesPage />} />
      <Route path={paths.createPackagePath} element={<CreatePackagePage />} />
      <Route path='/package/edit-package/:id' element={<EditPackagePage />} />
      <Route path={paths.settingsPath} element={<SettingsPage />} />
      <Route path={paths.packagesListpath} element={<PackagesListPage />} />
    </Routes>
  );
};
