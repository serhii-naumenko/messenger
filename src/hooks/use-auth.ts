import { useSelector } from 'react-redux';
import { selectors } from '../redux/ContactReducer';

export function useAuth() {
  const { email, token, id } = useSelector(selectors.getUser);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
