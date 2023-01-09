import {
    OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
    CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,

    OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
    CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,

    OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,
    CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,

    OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,
    CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,

    OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,
    CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,

    OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE,
    CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE

} from '../actions/actions';

const initialState = {
    is_open_marki_popup_in_catalog_select_mark_page: false,
    is_open_model_popup_in_catalog_select_model_page: false,
    is_open_pakaleni_popup_in_catalog_select_pakaleni_page: false,
    is_open_modifikacia_popup_in_catalog_select_modifikacia_page: false,
    is_open_komplektacia_popup_in_catalog_select_komplektacia_page: false,
    is_open_select_done_popup_in_catalog_select_done_page: false,

};

function justDriveReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
            return { ...state, is_open_marki_popup_in_catalog_select_mark_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
            return { ...state, is_open_marki_popup_in_catalog_select_mark_page: false };
        // return {...state, from_address_data_from_redux: action.payload};


        case OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
            return { ...state, is_open_model_popup_in_catalog_select_model_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
            return { ...state, is_open_model_popup_in_catalog_select_model_page: false };
        // return {...state, from_address_data_from_redux: action.payload};


        case OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE:
            return { ...state, is_open_pakaleni_popup_in_catalog_select_pakaleni_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE:
            return { ...state, is_open_pakaleni_popup_in_catalog_select_pakaleni_page: false };
        // return {...state, from_address_data_from_redux: action.payload};



        case OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE:
            return { ...state, is_open_modifikacia_popup_in_catalog_select_modifikacia_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE:
            return { ...state, is_open_modifikacia_popup_in_catalog_select_modifikacia_page: false };
        // return {...state, from_address_data_from_redux: action.payload};



        case OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE:
            return { ...state, is_open_komplektacia_popup_in_catalog_select_komplektacia_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE:
            return { ...state, is_open_komplektacia_popup_in_catalog_select_komplektacia_page: false };
        // return {...state, from_address_data_from_redux: action.payload};
        case OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE:
            return { ...state, is_open_select_done_popup_in_catalog_select_done_page: true };
        // return {...state, from_address_data_from_redux: action.payload};

        case CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE:
            return { ...state, is_open_select_done_popup_in_catalog_select_done_page: false };
        // return {...state, from_address_data_from_redux: action.payload};

        default:
            return state;
    }
}

export default justDriveReducer;
