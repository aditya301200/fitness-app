import './Trainers.css'
import HeaderImage from '../../images/header_bg_5.jpg'
import Header from '../../components/Header'
import { trainers } from '../../data'
import Trainer from '../../components/Trainer'
import {SiInstagram} from "react-icons/si";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod eveniet possimus autem! Sint quia enim, inventore placeat deleniti illum?
      </Header>

      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return (
                <Trainer
                  key={id}
                  image={image}
                  name={name}
                  job={job}
                  socials={[
                    { icon: <SiInstagram />, link: socials[0] },
                    { icon: <AiOutlineTwitter />, link: socials[1] },
                    { icon: <FaFacebookF />, link: socials[2] },
                    { icon: <FaLinkedinIn />, link: socials[3] }
                  ]}
                />
              );
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers