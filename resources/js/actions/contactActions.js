import api from "../services/api";
import {
    SEND_CONTACT_FORM_FAIL,
    SEND_CONTACT_FORM_START,
    SEND_CONTACT_FORM_SUCCESS
} from "./types";
export const sendContactForm = values => dispatch => {
    dispatch(sendContactFormStart());
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("file", values.file);
    formData.append("message", values.message);
    formData.append("phone", values.phone);
    api.post("/contact", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
        .then(res => dispatch(sendContactFormSuccess(res.data)))
        .catch(err => dispatch(sendContactFormFail(err.response.data)));
};

const sendContactFormStart = () => ({
    type: SEND_CONTACT_FORM_START
});

const sendContactFormSuccess = res => ({
    type: SEND_CONTACT_FORM_SUCCESS,
    payload: res
});

const sendContactFormFail = err => ({
    type: SEND_CONTACT_FORM_FAIL,
    payload: err
});
