import "./overlayloader.css";
import {useSelector} from "react-redux";

type Props = {};

export const OverlayLoader = (props: Props) => {
	const loadingState = useSelector((state: any) => state.loading);

	return (
		<>
			{loadingState.requestCount > 0 && (
				<div className="myoverlay">
					<div className="myoverlay__inner">
						<div className="myoverlay__content">
							<img className="myspinner" src="/assets/images/tobeto.png" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};
