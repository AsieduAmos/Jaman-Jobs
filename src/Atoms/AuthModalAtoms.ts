import {atom} from 'recoil';

type AuthModalState = {
    isOpen: boolean; 
    type: 'login' | 'regiter' | 'forgotPassword';
};
const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login',
};
export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: initialAuthModalState,
});  