import React from 'react'
import { sortByProperty } from '../helpers'

import Form from './../components/form'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://kodeopgave1.dev.di.dk/api/employees").then((res) => res.json()).then((data) => {
            data.sort(sortByProperty("FirstName"));
            this.setState({
                employees: data,
                DataisLoaded: true
            });
        })
    }

    openModal(e) {
        const modal = document.querySelector("#modal-" + e);
        modal.classList.add("is-open");
    }

    closeModal(e) {
        const modal = document.querySelector("#modal-" + e);
        modal.classList.remove("is-open");
    }

    render() {

        const { DataisLoaded, employees } = this.state;

        if (!DataisLoaded) {
            return (
                <div className="loading">Loading...</div>
            );
        }
        else {
            return (
                <>
                    <div className="ribbon ribbon--rtl "></div>
                    <section className="section">
                        <div className="deck deck--brand deck--header">
                            <div className="w--md banner-title">
                                <h1>Medarbejdere</h1>
                                <p>Find kontaktoplysninger på DI medarbejdere, bestyrelser, forretningsudvalg medlemsforeninger, brancheservicecentre og andre medlemmer.</p>
                            </div>
                            
                        </div>
                    </section>
                    <section className="section">
                        <div className="deck">
                            <div className="w--md">
                                <div className="flex-grid">
                                    <div className="flex-grid__col flex-grid__col--12 flex-grid__col--md-7">
                                        <article className="article">
                                            <ul>
                                                {
                                                    employees && employees.length > 0 && employees.map((item, i) =>
                                                        <li key={i}>
                                                            <a className="js--open-modal" data-modal={"modal-" + i} onClick={this.openModal.bind(this, i)}>
                                                                {item.FirstName} {item.LastName}
                                                            </a>
                                                            <div className="modal js--modal" id={"modal-" + i}>
                                                                <div className="modal__container">
                                                                    <a href="#" className="modal__container__close js--close-modal" onClick={this.closeModal.bind(this, i)}></a>
                                                                    <div className="modal__content">
                                                                        <a href="#" className="modal__close js--close-modal" onClick={this.closeModal.bind(this, i)}></a>
                                                                        <div className="rich-text">
                                                                            <h3>{item.FirstName} {item.LastName}</h3>
                                                                            <p className="mb0">Age: {item.Age}</p>
                                                                            <p className="mb0">Phone: {item.Phone}</p>
                                                                            <p>Email: {item.Email}</p>
                                                                            {item.Description != null ? (
                                                                                <p>{item.Description}</p>
                                                                            ) : ""}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </article>
                                    </div>
                                    <div className="flex-grid__col flex-grid__col--12 flex-grid__col--md-4">
                                        <aside className="aside aside--significant">

                                            <div className="aside__item">
                                                <h2 className="aside__headline">Opret medarbejdere</h2>
                                            </div>
                                            <div className="aside__item">
                                                <Form />
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
}

export default Home