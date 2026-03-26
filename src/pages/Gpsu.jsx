import { Link } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import { gpsuCareerProfiles, gpsuBenefits, gpsuFocusAreas } from '../data/gpsu';

export default function Gpsu() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gpsu-hero">
        <div className="container text-center">
          <AnimatedSection animation="animate-on-scroll">
            <img
              src="https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GPSU_Trademark_White-Text_Gradient-Tag_Horizontal_1146x326.png"
              alt="GuidePoint Security University"
              className="gpsu-hero__logo"
            />
            <h2 className="gpsu-hero__subtitle">
              Start or extend your cybersecurity career with a training program built by experienced practitioners
            </h2>
            <Link to="/company/careers" className="btn btn-accent">Learn More</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GPSU OVERVIEW ===== */}
      <section className="gpsu-overview">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="gpsu-overview__heading">
                  GPSU <em className='text-dark'>Overview</em>
                </h2>
                <p className="gpsu-overview__text">
                  Despite increased investment in cybersecurity, commercial and government organizations continue to face a massive skills shortage due to heavier workloads, unfilled positions and worker burnout.*
                </p>
                <p className="gpsu-overview__text">
                  GuidePoint Security University (GPSU) is a training and development pipeline to help those interested in a cybersecurity career develop critical industry skills and apply cyber knowledge to develop real-world solutions. GPSU has an internship component, which is tailored to create an individualized experience based on your background and aptitude that teaches both technical and soft skills.
                </p>
                <Link to="/contact" className="btn btn-accent" style={{ marginTop: '20px' }}>Learn More</Link>
                <p className="gpsu-overview__footnote">
                  * The Life and Times of Cybersecurity Professionals 2021, ISSA and ESG
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="gpsu-overview__video">
                  <img
                    src="https://embed-ssl.wistia.com/deliveries/a7d1493e17a7de0952f037070dd8375c.webp?image_crop_resized=960x540"
                    alt="GPSU Overview Video"
                    className="gpsu-overview__video-thumb"
                  />
                  <div className="gpsu-overview__play-overlay">
                    <i className="bi bi-play-circle-fill"></i>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IS GPSU RIGHT FOR YOU? ===== */}
      <section className="gpsu-right-for-you">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="gpsu-right-for-you__heading text-underline-accent">Is GPSU Right for You?</h2>
            <p className="gpsu-right-for-you__text">
              Whether you are new to cybersecurity or have a background in IT, GPSU is designed to help you{' '}
              <a href="https://www.guidepointsecurity.com/wp-content/uploads/2022/04/GPSU_Cybersecurity-Training-Program_DS.pdf" target="_blank" rel="noopener noreferrer" className="gpsu-right-for-you__link">
                begin or enhance your cybersecurity career
              </a>.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsu-military card-gradient card-gradient--accent-bottom">
              <h2 className="gpsu-military__heading">Transitioning from Active Duty Military?</h2>
              <p className="gpsu-military__text">
                We are authorized to conduct SkillBridge, Career Skills Program and Hiring Our Heroes internships. Learn more about our{' '}
                <a href="https://www.guidepointsecurity.com/wp-content/uploads/2022/04/GPSU_DoD-SkillBridge-Internship_DS.pdf" target="_blank" rel="noopener noreferrer" className="gpsu-right-for-you__link">
                  DoD internships
                </a>{' '}
                by contacting the team at{' '}
                <a href="mailto:GPSU@guidepointsecurity.com" className="gpsu-right-for-you__link">
                  GPSU@guidepointsecurity.com
                </a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CAREER PROFILES ===== */}
      <section className="gpsu-careers">
        <div className="gpsu-careers__layout">
          <div className="gpsu-careers__content">
            <AnimatedSection animation="stagger-children">
              <ul className="gpsu-careers__list">
                {gpsuCareerProfiles.map((profile, i) => (
                  <li className="gpsu-careers__item" key={i}>
                    <i className="bi bi-check-circle gpsu-careers__icon"></i>
                    <div>
                      <strong className="gpsu-careers__item-title">{profile.title}</strong>
                      {' '}{profile.description}
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          <div className="gpsu-careers__image">
            <img
              src="https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Security_Awareness_and_Education_Right_Revised.png"
              alt="GPSU Security Awareness"
            />
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="gpsu-benefits">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <a href="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/GPSU_Annual_Review_eBook.pdf" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPSU_Annual-Review_Thumbnail-2024-1.png"
                    alt="GPSU 2024 Annual Report"
                    className="gpsu-benefits__report-img"
                  />
                </a>
                <p className="gpsu-benefits__caption">
                  <strong>The 2024 GuidePoint Security University Annual Report</strong> highlights another year of impactful growth in cybersecurity education. This edition features the GPSU internship program's continued success. <strong>Click the Report cover to read more.</strong>
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="gpsu-benefits__heading"><span className="text-accent-box">Benefits</span> of Conducting a GPSU Internship</h2>
                <ul className="gpsu-benefits__list">
                  {gpsuBenefits.map((benefit, i) => (
                    <li className="gpsu-benefits__item" key={i}>
                      <i className="bi bi-check-circle gpsu-careers__icon"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GETTING STARTED ===== */}
      <section className="gpsu-getting-started">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="gpsu-getting-started__heading"><span className="text-accent-box">Getting Started</span> in Cybersecurity</h2>
                <p className="gpsu-getting-started__text">
                  Oftentimes, we see <strong>two areas</strong> where people struggle when it comes to landing your first cybersecurity job:
                </p>
                <ol className="gpsu-getting-started__numbered-list">
                  <li className="gpsu-getting-started__text">It can be difficult to wade through the myriad of resources available and come up with an effective plan.</li>
                  <li className="gpsu-getting-started__text">It can also be frustrating applying to hundreds of jobs and hearing nothing back.</li>
                </ol>
                <p className="gpsu-getting-started__text">
                  This ebook, written by our Director of GuidePoint Security University, is created for the sole purpose of helping you better understand what hiring managers are looking for, how to prepare, and where to focus your energy so you can successfully launch or advance your cybersecurity career.
                </p>
                <a href="https://www.guidepointsecurity.com/resources/getting-started-in-cybersecurity/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">Download eBook</a>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 text-center">
              <AnimatedSection animation="fade-in-right">
                <a href="https://www.guidepointsecurity.com/resources/getting-started-in-cybersecurity/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPSU_Getting_Started_Image.png"
                    alt="Getting Started in Cybersecurity eBook"
                    className="gpsu-getting-started__ebook"
                  />
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY VIDEO ===== */}
      <section className="gpsu-community">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="gpsu-community__title">GPS University:</h2>
                <h2 className="gpsu-community__subtitle">A Community Designed{'\n'}to Support + Inspire You</h2>
                <p className="gpsu-community__text">
                  We shine a spotlight on GuidePoint Security University's [GPSU] transformative impact on helping to fill the cybersecurity talent gap. Led by our GPSU Director Kevin Woods, this narrative showcases the journeys of several remarkable students, exemplifying how GPS University propels them towards success in their IT Security field of choice and empowers them to shape a brighter future for themselves + the world around us.
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="gpsu-community__video">
                  <img
                    src="https://embed-ssl.wistia.com/deliveries/a7d1493e17a7de0952f037070dd8375c.webp?image_crop_resized=960x540"
                    alt="GPSU Community Video"
                  />
                  <div className="gpsu-community__play-overlay">
                    <i className="bi bi-play-circle-fill"></i>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL FOCUS AREAS ===== */}
      <section className="gpsu-focus">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="gpsu-focus__heading">GPSU <span className="text-accent-box">Technical</span> Focus Areas</h2>
          </AnimatedSection>
          <div className="row">
            {gpsuFocusAreas.map((area, i) => (
              <div className="col-lg-6 mb-4" key={i}>
                <AnimatedSection animation="animate-on-scroll">
                  <h3 className="gpsu-focus__title">{area.title}</h3>
                  <p className="gpsu-focus__desc">{area.description}</p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEXT STEPS ===== */}
      <section className="gpsu-next-steps">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="gpsu-next-steps__heading">GPSU <span className="text-accent-box">Next Steps</span></h2>
            <p className="gpsu-next-steps__text">
              <strong>Apply for an Internship!</strong> See available internships on our{' '}
              <Link to="/company/careers">Careers Page</Link>.
            </p>
            <p className="gpsu-next-steps__text">
              <strong>Want More Information?</strong> Please contact{' '}
              <a href="mailto:GPSU@guidepointsecurity.com">GPSU@guidepointsecurity.com</a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
