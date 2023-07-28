import s from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import { Project } from './Project/Project';
import { Title } from '../../common/components/title/Title';
import imgTodoList from '../../assets/images/TodoList.png'
import imgSocialNetwork from '../../assets/images/SocialNetwork.jpg'

export const Projects = () => {
  return (
    <div className={s.myWorksBlock}>
      <div className={`${styleContainer.container} ${s.projectsContainer}`}>
        <Title subtitle="Visit my projects" title="Projects" />
        <div className={s.projects}>
          <Project
            imgSrc={imgTodoList}
            title="TodoList"
            description="Stack: TypeScript, React, Redux toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook"
          />
          <Project
            imgSrc={imgSocialNetwork}
            title="Social Network"
            description="Stack: TypeScript, React, React Router DOM"
          />
           <Project
            imgSrc='https://avatanplus.com/files/resources/mid/5a85ac6ddd1d81619a298d52.png'
            title="Cats"
            description="Cats (also known as the domestic cat or house cat to distinguish it from other felids), is a small domesticated carnivorous mammal that is valued by humans for its companionship and its ability to hunt vermin and household pests."
          />
        </div>
      </div>
    </div>
  );
};
