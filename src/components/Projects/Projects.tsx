import s from './Projects.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import { Project } from './Project/Project';
import { Title } from '../../common/components/title/Title';

export const Projects = () => {
  return (
    <div className={s.myWorksBlock}>
      <div className={`${styleContainer.container} ${s.projectsContainer}`}>
        <Title subtitle="Visit my projects" title="Projects" />
        <div className={s.projects}>
          <Project
            imgSrc='https://avatanplus.com/files/resources/mid/5a85ac6ddd1d81619a298d52.png'
            title="Cats"
            description="Cats (also known as the domestic cat or house cat to distinguish it from other felids), is a small domesticated carnivorous mammal that is valued by humans for its companionship and its ability to hunt vermin and household pests."
          />
          <Project
            imgSrc='https://sun9-35.userapi.com/impf/c621729/v621729758/d03e/Tc8PXb4iw44.jpg?size=400x291&quality=96&sign=b878e85a966dc3d6e52beb1675ab12ed&c_uniq_tag=AHJIuhGy9n1jhW3nv_Mfu_RCzXAFXh5GvRrfkWGlFXY&type=album'
            title="Dogs"
            description="Dogs (Canis lupus familiaris, pronounced /ˈkeɪ.nɪs ˈluːpəs fʌˈmɪliɛərɪs/) are domesticated form of the wolves and members of the Canidae family of the order Carnivora. The term is used for both feral and pet varieties."
          />
          <Project
            imgSrc='https://sun9-35.userapi.com/impf/c621729/v621729758/d03e/Tc8PXb4iw44.jpg?size=400x291&quality=96&sign=b878e85a966dc3d6e52beb1675ab12ed&c_uniq_tag=AHJIuhGy9n1jhW3nv_Mfu_RCzXAFXh5GvRrfkWGlFXY&type=album'
            title="Dogs"
            description="Dogs (Canis lupus familiaris, pronounced /ˈkeɪ.nɪs ˈluːpəs fʌˈmɪliɛərɪs/) are domesticated form of the wolves and members of the Canidae family of the order Carnivora. The term is used for both feral and pet varieties."
          />
        </div>
      </div>
    </div>
  );
};
