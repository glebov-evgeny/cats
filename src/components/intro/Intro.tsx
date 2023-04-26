import './Intro.scss';
import Card from '../_ui/card/Card';

function Intro(props: { allCats: any }) {
  type itemCard = {
    id: string,
    height: number,
    width: number,
    url: string,
  }
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__box">
          {props.allCats.map((item: itemCard)=> <Card key={item.id} item={item}/>)}
        </div>
      </div>
    </section>
  );
}

export default Intro;
