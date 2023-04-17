import './styles';
import { initRouteEvent, loadCurrentPage } from './shared/routes';
import { getSavedAuthInfo, requestUserInfo } from './shared/auth';

const initialAuthinfo = getSavedAuthInfo();

if (initialAuthinfo.accessToken) {
  requestUserInfo(initialAuthinfo).then(() => loadCurrentPage());
} else {
  loadCurrentPage();
}

initRouteEvent();
