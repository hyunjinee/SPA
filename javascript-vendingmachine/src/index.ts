import './styles';
import { initRouteEvent, loadCurrentPage } from './routes';
import { getSavedAuthInfo, requestUserInfo } from './utils/auth';

const initialAuthinfo = getSavedAuthInfo();

if (initialAuthinfo.accessToken) {
  requestUserInfo(initialAuthinfo).then(() => loadCurrentPage());
} else {
  loadCurrentPage();
}

initRouteEvent();
