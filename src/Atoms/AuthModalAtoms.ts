import {atom} from 'recoil';

type AuthModalState = {
    isOpen: boolean; 
    type: 'login' | 'regiter' | 'forgotPassword';
};
const defaultAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login',
};
export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: defaultAuthModalState,
});