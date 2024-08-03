import { Alert,Container,} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import mission from './images/mission.jpg'
//import vision from './images/vision.jpg'
import values from './images/values.jpg'
import AboutUs from './images/AboutUs.jpg'
import Ourteam from './images/Ourteam.jpg'
import approach from './images/approach.jpg'
import vision from './images/vision.jpg'
import { Navigationbar } from "./Navigationbar";
export function About(){
    return (
        <Container>
        <Navigationbar/>
            <Alert variant="primary">
                <p>🛠️Founded in 2023, AutoAce is a leading servicing website streamlining and revolutionising the repairing,maintainence, bike in Nagpur, Mumbai, Pune, and Gujrat. Leveraging a Smart AI Pricing Engine, and 140 quality checks, reparing vehicles is seamless and transparent with Autoace. </p>
            </Alert> 

<section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-uppercase">About Us</h3>
        <h2 class="display-5 mb-4">Our journey began with a dream of redefining how the world perceives Our Service.</h2>
        <button type="button" class="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Discover More</button>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0">
      <div class="col-12 col-lg-6">
        <article>
          <div class="card border-0">
            <img class="card-img-top img-fluid m-0" loading="lazy" src={vision} alt="" style={{height:'56vh' }}/>
            <div class="card-body border bg-white p-4">
              <div class="entry-header mb-3">
                <h2 class="card-title entry-title h4 mb-0">
                  <a class="link-dark text-decoration-none" href="#!">Our Vision</a>
                </h2>
              </div>
              <p class="card-text entry-summary text-secondary mb-3">A successful vision statement will come from a team effort, everyone working on the service desk and all key stakeholders should be involved and need to agree on the vision bike repair shop watching your machine getting washed or waiting for the repairs to be done.</p>
            </div>
          </div>
        </article>
      </div>
      <div class="col-12 col-lg-6">
        <article>
          <div class="card border-0">
            <img class="card-img-top img-fluid m-0" loading="lazy" src={approach } alt=""/>
            <div class="card-body border bg-white p-4">
              <div class="entry-header mb-3">
                <h2 class="card-title entry-title h4 mb-0">
                  <a class="link-dark text-decoration-none" href="#!">Our Approach</a>
                </h2>
              </div>
              <p class="card-text entry-summary text-secondary mb-3">In today’s fast-paced life, taking the time out and riding your bike to the service center could be tiresome. You may not love spending hours in the bike repair shop watching your machine getting washed or waiting for the repairs to be done.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
     

    <section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src={Ourteam} alt=""/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="h1 mb-3">Who Are We?</h2>
            <p class="lead fs-4 text-secondary mb-3">We help people to secure time Our perspective is to furnish outstanding captivating services.</p>
            <p class="mb-5"></p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Versatile Brand</h4>
                    <p class="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Digital Agency</h4>
                    <p class="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
Copy

    <section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy" src={AboutUs} alt=""/>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-10">
            <h2 class="h1 mb-3">Why Choose Us?</h2>
            <p class="lead fs-4 mb-3 mb-xl-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
            <div class="d-flex align-items-center mb-3">
              <div class="me-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p class="fs-5 m-0">Our evolution procedure is super intelligent.</p>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="me-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p class="fs-5 m-0">We deliver services beyond expectations.</p>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4 mb-xl-5">
              <div class="me-3 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p class="fs-5 m-0">Let's hire us to reach your objectives.</p>
              </div>
            </div>
            <button type="button" class="btn bsb-btn-2xl btn-outline-primary rounded-pill">Connect Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                 
             </Container>
    );
}