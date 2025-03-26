import HTML from '../../assets/images/HTML.png';
import ASP from '../../assets/images/asp.net.png';
import Bootstrap from '../../assets/images/bootstrap.png';
import CPP from '../../assets/images/c-.png';
import Csharp from '../../assets/images/c-sharp.png';
import CSS from '../../assets/images/css.png';
import DSA from '../../assets/images/structure.png';
import Java from '../../assets/images/java.png';
import JS from '../../assets/images/javascript.png';
import C from '../../assets/images/letter-c.png';
import Node from '../../assets/images/node.png';
import Oracle from '../../assets/images/oracle.png';
import PHP from '../../assets/images/php.png';
import Postgress from '../../assets/images/postgre.png';
import Python from '../../assets/images/python.png';
import ReactIcon from '../../assets/images/react.png';
import SQL from '../../assets/images/sql.png';
import Swift from '../../assets/images/swift.png';
import Typescript from '../../assets/images/typescript.png';
import Laravel from '../../assets/images/laravel-line.svg';
import ExpressIcon  from '../../assets/images/express.svg';
import ReduxIcon from '../../assets/images/redux.svg';
import MongoDB from '../../assets/images/mongodb.svg';
import Kotlin from '../../assets/images/kotlin.svg';
import Tailwind from '../../assets/images/tailwind.svg';
import Prisma from '../../assets/images/prisma.svg';
import Postman from '../../assets/images/postman.svg';
import Wordpress from '../../assets/images/wordpress.svg';
import Icon from './Icons';
import './IconPage.css';

export default function IconPage(){
    return(
        <div className='skills-page'>
            
            <div className='skills-title text-center display-3'> Skills and Tech Stack </div>

            <div className='d-flex flex-wrap gap-3 justify-content-center'>
                <Icon name={'HTML'} iconSrc={HTML}/>
                <Icon name={'CSS'} iconSrc={CSS}/>
                <Icon name={'Bootstrap'} iconSrc={Bootstrap}/>
                <Icon name={'Java Script'} iconSrc={JS}/>
                <Icon name={'ASP'} iconSrc={ASP}/>
                <Icon name={'C#'} iconSrc={Csharp}/>
                <Icon name={'C'} iconSrc={C}/>
                <Icon name={'CPP'} iconSrc={CPP}/>
                <Icon name={'Python'} iconSrc={Python}/>
                <Icon name={'DSA'} iconSrc={DSA}/>
                <Icon name={'Java'} iconSrc={Java}/>
                <Icon name={'Swift'} iconSrc={Swift}/>
                <Icon name={'Oracle'} iconSrc={Oracle}/>
                <Icon name={'PHP'} iconSrc={PHP}/>
                <Icon name={'Laravel'} iconSrc={Laravel}/>
                <Icon name={'React'} iconSrc={ReactIcon}/>
                <Icon name={'Node'} iconSrc={Node}/>
                <Icon name={'Type Script'} iconSrc={Typescript}/>
                <Icon name={'Postgress'} iconSrc={Postgress}/>
                <Icon name={'SQL'} iconSrc={SQL}/>
                <Icon name={'Express'} iconSrc={ExpressIcon}/>
                <Icon name={'Redux'} iconSrc={ReduxIcon}/>
                <Icon name={'MongoDB'} iconSrc={MongoDB}/>
                <Icon name={'Tailwind'} iconSrc={Tailwind}/>
                <Icon name={'Kotlin'} iconSrc={Kotlin}/>
                <Icon name={'Prisma'} iconSrc={Prisma}/>
                <Icon name={'Postman'} iconSrc={Postman}/>
                <Icon name={'Wordpress'} iconSrc={Wordpress}/>

            </div>

        </div>
        
    )
        
}