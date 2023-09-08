import { Renderable, toast } from "react-hot-toast";
import {
	AiFillCheckCircle,
	AiFillInfoCircle,
	AiFillWarning,
} from "react-icons/ai";
import { VscError } from "react-icons/vsc";

type alertTypes = "success" | "error" | "warning" | "info";

export default function showToast(msg: string, type: alertTypes = 'error') {
	let classNames: string | undefined, icon: Renderable | undefined;
	switch (type) {
		case "success":
			classNames = "alert alert-success";
			icon = <AiFillCheckCircle size={25} />;
			break;
		case "error":
			classNames = "alert alert-error";
			icon = <VscError size={25} />;
			break;
		case "warning":
			classNames = "alert alert-warning";
			icon = <AiFillWarning size={25} />;
			break;
		case "info":
			classNames = "alert alert-info";
			icon = <AiFillInfoCircle size={25} />;
			break;
	}

	toast(msg, {
		icon,
		className: classNames,
	});
}
