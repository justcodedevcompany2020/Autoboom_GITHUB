import {
    OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
    CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,

    OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
    CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE

} from '../actions/actions';

const initialState = {
    is_open_marki_popup_in_catalog_select_mark_page: false,
    is_open_model_popup_in_catalog_select_model_page: false,
};

function justDriveReducer(state = initialState, action)
{
    switch (action.type) {
        case OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
            return {...state, is_open_marki_popup_in_catalog_select_mark_page: true};
            // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
            return {...state, is_open_marki_popup_in_catalog_select_mark_page: false};
            // return {...state, from_address_data_from_redux: action.payload};

        case OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
            return {...state, is_open_model_popup_in_catalog_select_model_page: true};
            // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
            return {...state, is_open_model_popup_in_catalog_select_model_page: false};
            // return {...state, from_address_data_from_redux: action.payload};

       default:
            return state;
    }
}

export default justDriveReducer;
