export interface adminSidebar {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: adminMenu[];
}
export interface adminMenu {
  menuValue: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  route?: string;
  icon: string;
  subMenus?: adminSubMenus[];
  base ?: string;
}
export interface adminSubMenus {
  menuValue?: string;
  route?: string;
}
export interface pharmacySidebar {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: pharmacyMenu[];
}
export interface pharmacyMenu {
  menuValue: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  route?: string;
  icon: string;
  subMenus?: pharmacySubMenus[];
  base ?: string;
}
export interface pharmacySubMenus {
  menuValue?: string;
  route?: string;
}

export interface SubMenu {
  menuValue?: string;
  route?: string;
  hasSubRoute?: boolean;
  showSubRoute?: boolean;
  openInNewTab?: boolean;
  subMenus: SubMenu[];
}

export interface Menu {
  menuValue: string;
  img?: string;
  route?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  openInNewTab?: boolean;
  subMenus: SubMenu[];
}

export interface header {
  tittle: string;
  route: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: Menu[];
}