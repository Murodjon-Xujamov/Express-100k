import { Routes, Route } from "react-router-dom";
import CreatePackagePage from "../pages/package-page/create-package-page";
import SettingsPage from "../pages/user/settings-page";
import ProfilePage from "../pages/user/profile-page";
import EditPackagePage from "../pages/package-page/edit-package-page";
import PackagesListPage from "../pages/packages-list-page/packages-list-page";
import PackagesPage from "../pages/package-page/packages-page";
import PackagesListDetailPage from "../pages/packages-list-page/packages-list-detail-page";
import paths from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<ProfilePage />} index />
      <Route path={paths.package} element={<PackagesPage />} />
      <Route path={paths.createPackage} element={<CreatePackagePage />} />
      <Route path={paths.editPackage} element={<EditPackagePage />} />
      <Route path={paths.settings} element={<SettingsPage />} />
      <Route path={paths.packagesList} element={<PackagesListPage />} />
      <Route
        path={paths.packagesListDetail}
        element={<PackagesListDetailPage />}
      />
    </Routes>
  );
};
