import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as contactActions from "../actions/contactActions";
// import { Container } from './styles';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            file: "",
            message: "",
            phone: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state);
    }
    handleSubmit() {
        this.props.sendContactForm(this.state);
    }
    render() {
        const { form } = this.props;
        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Formulário de Contato</h2>
                </div>
                {form.errors &&
                    form.errors.map((error, index) => (
                        <div key={index} className="alert alert-danger">
                            <p>{error}</p>
                        </div>
                    ))}
                {form.successMessage && (
                    <div className="alert alert-success">
                        {form.successMessage}
                    </div>
                )}
                <form action="#" encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Seu nome"
                            onChange={text =>
                                this.setState({ name: text.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onChange={text =>
                                this.setState({ email: text.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="DDD+numero ex:2186578845"
                            onChange={text =>
                                this.setState({ phone: text.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Anexo</label>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            onChange={file =>
                                this.setState({ file: file.target.files[0] })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            onChange={text =>
                                this.setState({ message: text.target.value })
                            }
                        />
                    </div>
                    <div className="form-group justify-content-center align-self-center">
                        <button
                            disabled={form.isSubmiting}
                            onClick={this.handleSubmit}
                            className="btn btn-primary align-self-center"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    form: state.form
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(contactActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm);
