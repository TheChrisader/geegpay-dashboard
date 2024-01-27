import { LogoutAlert } from "./logoutAlert";
import { SettingsDrawer } from "./settingsDrawer";
import { Button } from "../ui/button";

const Submenu = ({ icons, toggle, link = false, selectLink, setCollapsed }) => {
  const moveSelector = (node) => {
    const coordinateY = node.getBoundingClientRect().y;
    selectLink(coordinateY);
  };

  const returnMenuItem = (Icon) => {
    if (Icon.action === "logout") {
      return (
        <LogoutAlert>
          <Icon />
        </LogoutAlert>
      );
    } else if (Icon.action === "collapse") {
      return (
        <Button
          variant="unstyled"
          size="unstyled"
          className="transition-transform hover:scale-125"
        >
          <Icon
            onClick={() => {
              setCollapsed(true);
            }}
          />
        </Button>
      );
    } else if (Icon.action === "settings") {
      return (
        <SettingsDrawer>
          <Icon />
        </SettingsDrawer>
      );
    } else {
      return <Icon onClick={toggle} />;
    }
  };

  return (
    <ul className="flex flex-col gap-4">
      {icons.map((Icon, i) => {
        return (
          <li
            key={i}
            className={`flex items-center justify-center px-5
              ${
                Icon.display && Icon.display === "Switch" ? "" : "h-10"
              } min-w-10 min-h-10`}
          >
            {link && Icon.display !== "Switch" ? (
              <a
                onClick={(e) => {
                  moveSelector(e.currentTarget);
                }}
                href="#"
                className="transition-transform hover:scale-125"
              >
                <Icon />
              </a>
            ) : (
              returnMenuItem(Icon)
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;
