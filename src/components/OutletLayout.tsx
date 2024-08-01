import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function OutletLayout() {
	return (
		<>
			<SideMenu />
			<Outlet />
		</>
	);
}
