import Image from "../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import SectionHead from "./SectionHead";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img
              src={Image}
              alt="Values img"
            />
          </div>
        </div>
        <div className="values_right">
          <SectionHead
            icon={<GiCutDiamond />}
            title="Values"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sint et sit eius accusamus dolor.
          </p>
          <div className="values_wrapper">
            {
              values.map(({id,icon,title,desc}) => {
                return <Card className='values_value' key={id} >
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
