// login
const Login = import("./pages/login/Login.js");
// user
const Profile = import("./pages/user/ProfilePage");
const Settings = import("./pages/user/SettingsPage.js");
// package
const Package = import("./pages/delivery/DeliveryList");
const CreatePackage = import("./pages/delivery/CreateDeliveryPage");
const EditPackage = import("./pages/delivery/EditDeliveryPage");
// package list
const PackageList = import("./pages/packages-list-page/PackagesListPage.js");

export const routes = [
  {
    path: "/login",
    exact: true,
    name: "Mening Kabinetim",
    component: Login,
  },
  {
    path: "/",
    exact: true,
    name: "Mening Kabinetim",
    component: Profile,
  },
  {
    path: "/settings",
    exact: true,
    name: "Sozlamalar",
    component: Settings,
  },
  {
    path: "/package",
    exact: true,
    name: "Pochtalar",
    component: Package,
  },
  {
    path: "/package/create-delivery",
    exact: true,
    name: "Pochta yaratish",
    component: CreatePackage,
  },
  {
    path: "/package/edit-package/:id",
    exact: true,
    name: "Pochtani tahrirlash",
    component: EditPackage,
  },
  {
    path: "/package-list",
    exact: true,
    name: "Pochtalar ro'yxati",
    component: PackageList,
  },
];
