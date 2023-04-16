import Header from '../../components/Header'
import './About.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header
        title="About Us"
        image={HeaderImage}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
        mollitia accusamus fuga labore nisi.
      </Header>

      <section className="about_story">
        <div className="container about_story_container">
          <div className="about_section_img">
            <img
              src={StoryImage}
              alt="Story img"
            />
          </div>

          <div className="about_section_content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis qui, tempore quis, porro sint, non quam atque sequi
              et earum beatae! Provident commodi pariatur, amet consequuntur
              ullam eum officiis molestiae!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              quisquam accusamus cumque corrupti id incidunt quam suscipit
              blanditiis alias eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus voluptatibus aut alias unde, deserunt ex.
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision_container">
          <div className="about_section_content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis qui, tempore quis, porro sint, non quam atque sequi
              et earum beatae! Provident commodi pariatur, amet consequuntur
              ullam eum officiis molestiae!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              quisquam accusamus cumque corrupti id incidunt quam suscipit
              blanditiis alias eligendi!
            </p>
          </div>
          <div className="about_section_img">
            <img
              src={VisionImage}
              alt="Vision img"
            />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission_container">
          <div className="about_section_img">
            <img
              src={MissionImage}
              alt="Mission img"
            />
          </div>
          <div className="about_section_content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis qui, tempore quis, porro sint, non quam atque sequi
              et earum beatae! Provident commodi pariatur, amet consequuntur
              ullam eum officiis molestiae!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              quisquam accusamus cumque corrupti id incidunt quam suscipit
              blanditiis alias eligendi!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About