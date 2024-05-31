import { routes } from "../js/route.js";
import '../css/nav_desktop.css';

export const NavDesktop = () => {
  return (
    <div className="nav-desktop" >
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <div className="nav-desktop-items">
            <Icon />
            <a
              href={href}
              className="ahref_style"
            >
              {title}
            </a>
          </div>
        );
      })}
    </div>
  );
};