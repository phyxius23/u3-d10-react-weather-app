const ItemTest = (props) => {
  // const date = props.oneday.dt_txt;
  const timestamp = props.oneday.dt;
  console.log(timestamp);
  const date = new Date(timestamp * 1000);
  console.log(date);
  const today = date.toLocaleString("it-IT", { day: "numeric", month: "long" });
  console.log(today);

  // console.log(date.toLocaleString());

  return (
    <>
      <div className="img-wrapper">
        {/* <Image src={require(`../icons/${props.icons[props.oneday.weather[0].icon]}.png`)} fluid alt="" /> */}
        <img src={require(`../icons/${props.icons[props.oneday.weather[0].icon]}.png`)} className="img-fluid" alt="" />
      </div>
      <div className="text-body">
        <p className="date">{today}</p>
        <p className="temperature">
          {props.oneday.main.temp.toString().slice(0, props.oneday.main.temp.toString().indexOf("."))}
          <span> C°</span>
        </p>
      </div>
    </>
    // <Card.Img variant="top" src={require(`../icons/04d.png`)} alt="" />
  );
};
export default ItemTest;
