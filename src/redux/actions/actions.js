export const OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE = 'OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARKI_PAGE';
export const CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE = 'CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE';


export const OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE = 'OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE';
export const CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE = 'CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE';

export const openMarkiPopUpInCatalogSelectMarkPage = () => dispatch =>
{
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
        payload: null,
    });
}

export const closeMarkiPopUpInCatalogSelectMarkPage = () => dispatch =>
{
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
        payload: null,
    });
}

export const openModelPopUpInCatalogSelectModelPage = () => dispatch =>
{
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
        payload: null,
    });
}

export const closeModelPopUpInCatalogSelectModelPage = () => dispatch =>
{
    // console.log(from_address_data, 'setFromAddressData ACTIONS');

    dispatch({
        type: CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
        payload: null,
    });
}

