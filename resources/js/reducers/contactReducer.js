import {
    SEND_CONTACT_FORM_FAIL,
    SEND_CONTACT_FORM_START,
    SEND_CONTACT_FORM_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    errors: [],
    isSubmiting: false,
    successMessage: ""
};
export default function contactReducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    console.log(type, payload);
    switch (type) {
        case SEND_CONTACT_FORM_START:
            return {
                ...state,
                isSubmiting: true
            };
        case SEND_CONTACT_FORM_SUCCESS:
            return {
                ...state,
                isSubmiting: false,
                successMessage: payload.message
            };
        case SEND_CONTACT_FORM_FAIL:
            var errors = payload.errors;
            if (payload.exception) {
                errors = [
                    "Ops!, parece que deu errado no nosso servidor, tente novamente mais tarde"
                ];
            }
            return {
                ...state,
                errors: errors,
                isSubmiting: false
            };
        default:
            return state;
    }
}
