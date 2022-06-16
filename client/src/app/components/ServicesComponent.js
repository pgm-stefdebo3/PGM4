const ServicesComponent = ({services}) => {
  return (
    <>
    {services.map((s) => {
      return (
      <div key={s.id} className="service__container">
        <h2>{s.name}</h2>
        <p>{s.description}</p>
      </div>
      )
    })}
    </>
  );
};

export default ServicesComponent;