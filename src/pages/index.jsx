"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("@emotion/core");
var header_1 = require("../components/header");
var full_screen_1 = require("../components/full-screen");
var IndexPage = function () { return (<react_1.Fragment>
    <core_1.Global styles={core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        * {\n          margin: 0;\n          padding: 0;\n        }\n      "], ["\n        * {\n          margin: 0;\n          padding: 0;\n        }\n      "])))}/>
    <header_1.default />
    <full_screen_1.default>
      <full_screen_1.default.content>
        <h2>Quem somos?</h2>
        <p>
          Starsurge nasceu com o objetivo de ajudar pessoas, construindo
          aplicações que possam ser mantidas por nossos clientes. Fornecemos
          consultoria para escolher a melhor tecnologia para seu projeto,
          escalável, que possa atingir um crescimento seguro, unindo a
          velocidade de desenvolvimento com o tempo de vida duradouro da sua
          aplicação
        </p>
      </full_screen_1.default.content>
    </full_screen_1.default>
    <full_screen_1.default>
      <full_screen_1.default.content>
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
              gerenciamento de conteúdo, unificamos CMS, CRM entre outras formas
              de gerenciamento em uma ferramenta prática e funcional.
            </p>
          </li>
          <li>
            <h3>SaaS</h3>
            <p>
              Quer construir seu SaaS? Podemos ajudar! Fornecemos toda estrutra
              para arquiteturar sua aplicação e codifica-la.
            </p>
          </li>
        </ul>
      </full_screen_1.default.content>
    </full_screen_1.default>
    <footer css={core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        text-align: center;\n      "], ["\n        text-align: center;\n      "])))}>
      <small>Made with love in Floripa-SC</small>
    </footer>
  </react_1.Fragment>); };
exports.default = IndexPage;
var templateObject_1, templateObject_2;
