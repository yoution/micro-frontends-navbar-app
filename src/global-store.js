
import {MfContext, StoreManager} from 'tc-mfa-context';

export let storeManager;
export const initGlobalStore = () => {
    // Initialize Global store
    storeManager = new StoreManager();
    storeManager.initGlobalStore();
    // Integrate store to global context
    const mfContext = new MfContext();
    mfContext.integrateStoreManager(storeManager);
    console.log('Global STORE Created');
    return storeManager;
}

export const getStoreManager = () => {
    if (!!storeManager) {
        return storeManager;
    }
    return initGlobalStore();
}