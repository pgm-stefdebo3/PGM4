import { NavLink } from "react-router-dom";

const HomepageComponent = ({data}) => {
  return (
    <div className="container-md homepage">
      <div className="home--description__container">
        <h1 className="home__title">Graduaat Programmeren</h1>
        <p className="home__description">Tijdens het Graduaat Programmeren leer je het zichtbare (front-end) en onzichtbare (backend) deel van web- en mobiele toepassingen ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital agencies werken en wat jouw rol hierbinnen zal zijn. Na deze opleiding kan je aan de slag als front-end developer, full-stack JavaScript developer, PHP developer, Web Designer + Coder of CMS Themer.</p>
        <a href="https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen" target="_blank" className="button description__link" rel="noreferrer" >Schrijf je in voor onze infodag van 25 juni</a>
      </div>
      <h2>Recent Blogs</h2>
      {data.blogs.map((b) => {
        return <div className="blog__container" key={b.id}>
          <NavLink to={`/blogs/${b.id}`} end><h3>{b.name}</h3></NavLink> 
          <h4>Recent Posts</h4>
          {b.posts.map((p) => {
            return <NavLink to={`/posts/${p.id}`} key={p.id} end><p>{p.title}</p></NavLink> 
          })}
        </div>
        })}
        <h2>Recent Members</h2>
        {data.members.map((m) => {
          return <div className="Member__container" key={m.id}>
            <NavLink to={`/portfolios/${m.id}`} end><p>{`${m.portfolio.firstName} ${m.portfolio.lastName}`}</p></NavLink>
          </div>
        })}
        <h2>Services</h2>
        {data.services.map((s) => {
          return (
            <div className="service__container">
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </div>
          )
        })}
    </div>
  );
};

export default HomepageComponent;