import React, { Fragment } from "react"
import Header from "../components/header";

export default () => (
    <Fragment>
        <Header/>
        <main>
            <section>
                <h2>Quem somos?</h2>
                <p>Starsurge nasceu com o objetivo de ajudar pessoas, construindo aplicações que possam ser mantidas por nossos clientes. Fornecemos consultoria para escolher a melhor tecnologia para seu projeto, escalável, que possa atingir um crescimento seguro, unindo a velocidade de desenvolvimento com o tempo de vida duradouro da sua aplicação</p>
            </section>
            <section>
                <h2>O que fazemos?</h2>
                <ul>
                    <li>
                        <h3>Restfull ou GraphQL</h3>
                        <p>Construímos APIs com as tenologias mais modernas para o seu negócio.</p>
                    </li>
                    <li>
                        <h3>Aplicações Mobile</h3>
                        <p>Atualmente entregamos aplicações nativas utilizando <i>React Native</i> aos nossos clientes, e trabalhamos com a possibilidade de criação de aplicações utilizando liguagens como <i>Kotlin</i> e <i>Swift</i>.</p>
                    </li>
                    <li>
                        <h3>Aplicações Backoffice</h3>
                        <p>Toda aplicação precisa de gerenciamento, para isto oferecemos a contrução de backoffice para sua aplicação, pensando em gerenciamento de conteúdo, unificamos CMS, CRM entre outras formas de gerenciamento em uma ferramenta prática e funcional.</p>
                    </li>
                    <li>
                        <h3>SaaS</h3>
                        <p>Quer construir seu SaaS? Podemos ajudar! Fornecemos toda estrutra para arquiteturar sua aplicação e codifica-la.</p>
                    </li>
                </ul>
            </section>
        </main>
        <footer>
            <small>Made with love in Floripa-SC</small>
        </footer>
    </Fragment>
)
