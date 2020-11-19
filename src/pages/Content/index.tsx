import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import waysImg from '../../assets/images/ways.png';
import movingImg from '../../assets/images/moving.png';

import './styles.css';
import { Link } from 'react-router-dom';

const Content: React.FC = () => {
  return (
    <div id="container">
      <div id="definition">
        <header>
          <Link to="/">
            <FiArrowLeft size={24} />
          </Link>
          <h1>Definição</h1>
        </header>

        <main>
          <p>
            A adaptabilidade é a capacidade de se adaptar diante de novos cenários ou transformações.
          </p>
          <br />
          <p>
            E como já foi falado durante a Expansion Week, “o seu futuro não vem já pronto, você está criando ele”, ou seja, seu futuro está totalmente dependente das suas escolhas, do seu aprendizado e o mais importante da sua habilidade de se adaptar as diferentes situações. Diante delas, é comum que nossa primeira reação seja o questionamento, medo ou até resistência para aceitar algo novo. Entretanto, você decidirá se vai enfrentar o novo cenário de forma negativa, ou positiva. Quando desenvolvemos a adaptabilidade, somos capazes não apenas de aceitar as mudanças, mas também de aprender com elas e enxergar seus pontos positivos.
          </p>
        </main>

        <footer>
          <img src={waysImg} alt="ways"/>
        </footer>
      </div>

      <div id="definition2">
        <main>
          <p>
            Se um dev não conseguir desenvolver uma boa adaptabilidade poderá “parar no tempo” e não aproveitar o máximo das novas ferramentas lançadas, consequentemente terá mais dificuldade para desenvolver uma determinada aplicação. Um exemplo disso é se imaginarmos um programador web tentando desenvolver algum site apenas com JS, CSS e HTML sem nenhuma biblioteca ou framework, apenas porque antigamente era assim e ele não soube se adaptar as novas tecnologias, temos que concordar que esse programador terá uma dificuldade e um tempo investido nessa aplicação bem maior que um programador que utiliza ReactJS, Styled-Components, SASS, entre outras bibliotecas/frameworks.
          </p>
          <br />
          <p>
            Na landing page você encontra um link para um video do TEDx Talks, onde o Raiam Santos conta como ele desenvolveu sua adaptabilidade e como utilizou-a na sua vida, inclusive a logo dessa página foi inspirada neste vídeo, onde ele faz diversas analogias com o camaleão pois sua pele se adapta conforme o ambiente em que ele está. 
          </p>
        </main>

        <footer>
          “A adaptabilidade te permite enxergar o mundo a partir de uma perspectiva otimista.”
        </footer>
      </div>

      <div id="why">
        <header>
          <h1>Por que adaptabilidade?</h1>
        </header>

        <main>
          <p>
            Dentre muitas importantes soft skills eu escolhi a adaptabilidade, pois hoje em dia é difícil conviver com a incerteza quanto ao futuro. No entanto, é certo que as mudanças virão, principalmente na nossa área com dev, onde as tecnologias são atualizadas com novas features diariamente e novas tecnologias aparecem no mercado constantemente, então, um bom desenvolvedor deve saber se adaptar a diferentes tipos de tecnologias, padrões de projetos e frameworks, nunca caindo na zona de conforto. 
          </p>
          <p>
            Sem contar que dentro do seu time poderá ocorrer uma escolha de uma outra linguagem para um determinado projeto por diversos motivos, como uma facilidade a mais durante o desenvolvimento, um melhor desempenho da aplicação, ou até mesmo para facilitar uma manutenção ao longo prazo.
          </p>
        </main>

        <footer>
          <img src={movingImg} alt="moving"/>
        </footer>
      </div>
    </div>
  );
};

export default Content;