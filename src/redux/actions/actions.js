export const OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE = 'OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARKI_PAGE';
export const CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE = 'CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE';

export const OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE = 'OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE';
export const CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE = 'CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE';

export const OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE = 'OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE';
export const CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE = 'CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE';

export const OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE = 'OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE';
export const CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE = 'CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE';

export const OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE = 'OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE';
export const CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE = 'CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE';

export const OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE = 'OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE';
export const CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE = 'CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE';

export const OPEN_LANGUAGES_POPUP_IN_MY_PROFILE = 'OPEN_LANGUAGES_POPUP_IN_MY_PROFILE';
export const CLOSE_LANGUAGES_POPUP_IN_MY_PROFILE = 'CLOSE_LANGUAGES_POPUP_IN_MY_PROFILE';

export const OPEN_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE = 'OPEN_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE';
export const CLOSE_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE = 'CLOSE_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE';

export const OPEN_NAME_EDIT_POPUP_IN_MY_PROFILE = 'OPEN_NAME_EDIT_POPUP_IN_MY_PROFILE';
export const CLOSE_NAME_EDIT_POPUP_IN_MY_PROFILE = 'CLOSE_NAME_EDIT_POPUP_IN_MY_PROFILE';

export const OPEN_EMAIL_POPUP_IN_MY_PROFILE = 'OPEN_EMAIL_POPUP_IN_MY_PROFILE'
export const CLOSE_EMAIL_POPUP_IN_MY_PROFILE = 'CLOSE_EMAIL_POPUP_IN_MY_PROFILE'

export const openMarkiPopUpInCatalogSelectMarkPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
        payload: null,
    });
}

export const closeMarkiPopUpInCatalogSelectMarkPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
        payload: null,
    });
}

export const openModelPopUpInCatalogSelectModelPage = () => dispatch => {

    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
        payload: null,
    });
}

export const closeModelPopUpInCatalogSelectModelPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
        payload: null,
    });
}


export const openPakaleniPopUpInCatalogSelectPakaleniPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,
        payload: null,
    });
}

export const closePakaleniPopUpInCatalogSelectPakaleniPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,
        payload: null,
    });
}


export const openModifikaciaPopUpInCatalogSelectModifikaciaPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,
        payload: null,
    });
}

export const closeModifikaciaPopUpInCatalogSelectModifikaciaPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,
        payload: null,
    });
}




export const openKomplektaciaPopUpInCatalogSelectKomplektaciaPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,
        payload: null,
    });
}

export const closeKomplektaciaPopUpInCatalogSelectKomplektaciaPage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,
        payload: null,
    });
}


export const openSelectDonePopUpInCloseSelectDonePage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE,
        payload: null,
    });
}

export const closeSelectDonePopUpInCloseSelectDonePage = () => dispatch => {
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE,
        payload: null,
    });
}


export const openLanguagesPopupInMyProfile = () => dispatch => {
    dispatch({
        type: OPEN_LANGUAGES_POPUP_IN_MY_PROFILE,
        payload: null
    })
}


export const closeLanguagesPopupInMyProfile = () => dispatch => {
    dispatch({
        type: CLOSE_LANGUAGES_POPUP_IN_MY_PROFILE,
        payload: null
    })
}


export const openAccaountEditPopupInMyProfile = () => dispatch => {
    dispatch({
        type: OPEN_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE,
        payload: null
    })
}


export const closeAccaountEditPopupInMyProfile = () => dispatch => {
    dispatch({
        type: CLOSE_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE,
        payload: null
    })
}

export const openNameEditPopupInMyProfile = () => dispatch => {
    dispatch({
        type: OPEN_NAME_EDIT_POPUP_IN_MY_PROFILE,
        payload: null
    })
}


export const closeNameEditPopupInMyProfile = () => dispatch => {
    dispatch({
        type: CLOSE_NAME_EDIT_POPUP_IN_MY_PROFILE,
        payload: null
    })
}

export const openEmailPopupInMyProfile = () => dispatch => {
    dispatch({
        type: OPEN_EMAIL_POPUP_IN_MY_PROFILE,
        payload: null
    })
}


export const closeEmailPopupInMyProfile = () => dispatch => {
    dispatch({
        type: CLOSE_EMAIL_POPUP_IN_MY_PROFILE,
        payload: null
    })
}