function Service({ item }) {
  console.log(item);
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={item.icon} alt="" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{item.title}</h4>
        <p className="service-item-text">{item.description}</p>
      </div>
    </li>
  );
}

export default Service;
