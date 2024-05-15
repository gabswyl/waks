import { useState } from 'react';
import './App.css';
import gabs from './assets/gabs.jpg';
import projetosData from './mocks/projetos.json';

function App() {
  const { projetos } = projetosData;

  const [selectedRole, setSelectedRole] = useState('frontend');

  const filteredProjects = projetos.filter(projeto => {
    if (!selectedRole) return true;
    return projeto.select.includes(selectedRole.toLowerCase());
  });

  return (
    <>
      <div className='container'>
      <main>
        <div className="author-info">
          <img className="profile" src={gabs} alt="gabriel" />
          <div>
            <strong>Gabriel Vilarino</strong>
            <p>Desenvolvedor Front-end</p>
          </div>
        </div>

        <div className="resumo">
          <div>
            <strong>Muito prazer! Sou desenvolvedor front-end, especializado em experiência do usuário. Trabalhei com design por 4 anos e, há cerca de um ano, migrei para o front-end e o design UX/UI. Minha paixão diária é usar tecnologias que transformem vidas, criem conexões e proporcionem uma ótima experiência para o usuário, resultando em vendas para os negócios através do desenvolvimento front-end.</strong>
            <br />
            <span>
              Atualmente, presto serviços de programação e design para empresários digitais e estou em busca do meu primeiro estágio como desenvolvedor front-end para iniciar minha carreira.
            </span>
          </div>

          <nav>
            <ul className="redes">
              <li>
                <a href="www.github.com/gabswyl">Github</a>
              </li>
              <li>
                <a>Linkedln</a>
              </li>
              <li>
                <a>WhatsApp</a>
              </li>
            </ul>
          </nav>
        </div>
      </main>

      <hr />

      <section>
        <div className="selectRole">
          <div>
            <button
              className={selectedRole === 'ux/ui' ? 'selected' : ''}
              onClick={() => setSelectedRole('ux/ui')}>
              UX/UI Design
            </button>
          </div>

          <div>
            <button
              className={selectedRole === 'frontend' ? 'selected' : ''}
              onClick={() => setSelectedRole('frontend')}>
              Front-end
            </button>
          </div>

          <div>
            <button
              className={selectedRole === 'backend' ? 'selected' : ''}
              onClick={() => setSelectedRole('backend')}>
              Back-end
            </button>
          </div>
        </div>


        <div>
          <ul className="projects">
            {filteredProjects.map((projeto, index) => (
              <li key={index}>
                <div>
                  <a class="link link--arrowed red" href="#">
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                      <g fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                      </g>
                    </svg></a>
                  <img src={`public/${projeto.img}`} alt={projeto.project} />
                </div>
                <b>{projeto.project}</b>
                <p>
                  {projeto.stacks}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </div>
    </>
  );
}

export default App;
