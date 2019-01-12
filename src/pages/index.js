import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import Header from "../components/header";
import FullScreen from "../components/full-screen";
import Footer from "../components/footer";

export default () => (
  <Fragment>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        html {
          height: 100%;
        }

        body,
        body > div,
        body > div > div {
          min-height: 100%;
        }
      `}
    />
    <Header />
    <main
      css={css`
        height: 100%;
        position: relative;
      `}
    >
      <FullScreen>
        <FullScreen.section>
          <h2>Quem somos?</h2>
          <p>
            Starsurge nasceu com o objetivo de ajudar pessoas, construindo
            aplicações que possam ser mantidas por nossos clientes. Fornecemos
            consultoria para escolher a melhor tecnologia para seu projeto,
            escalável, que possa atingir um crescimento seguro, unindo a
            velocidade de desenvolvimento com o tempo de vida duradouro da sua
            aplicação
          </p>
        </FullScreen.section>
      </FullScreen>
      <FullScreen>
        <FullScreen.section>
          <h2>O que fazemos?</h2>
          <ul>
            <li>
              <h3>Restfull ou GraphQL</h3>
              <p>
                Construímos APIs com as tenologias mais modernas para o seu
                negócio.
              </p>
            </li>
            <li>
              <h3>Aplicações Mobile</h3>
              <p>
                Atualmente entregamos aplicações nativas utilizando{" "}
                <i>React Native</i> aos nossos clientes, e trabalhamos com a
                possibilidade de criação de aplicações utilizando liguagens como{" "}
                <i>Kotlin</i> e <i>Swift</i>.
              </p>
            </li>
            <li>
              <h3>Aplicações Backoffice</h3>
              <p>
                Toda aplicação precisa de gerenciamento, para isto oferecemos a
                contrução de backoffice para sua aplicação, pensando em
                gerenciamento de conteúdo, unificamos CMS, CRM entre outras
                formas de gerenciamento em uma ferramenta prática e funcional.
              </p>
            </li>
            <li>
              <h3>SaaS</h3>
              <p>
                Quer construir seu SaaS? Podemos ajudar! Fornecemos toda
                estrutra para arquiteturar sua aplicação e codifica-la.
              </p>
            </li>
          </ul>
        </FullScreen.section>
      </FullScreen>
    </main>
    <Footer />
  </Fragment>
);
