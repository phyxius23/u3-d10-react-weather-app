import { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CityToday = () => {
  const [cityWeather, setCityWeather] = useState(null);

  const city = useSelector((state) => state.cities.content);

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?lat=";
  const key = "5dbe3106653ea444b0de09843c5688ec";

  useEffect(() => {
    getWeatherCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherCity = async () => {
    try {
      const response = await fetch(baseEndpoint + city.lat + "&lon=" + city.lon + "&appid=" + key);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCityWeather(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cityWeather && (
        <Row className="justify-content-center">
          <Col xs={10}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{cityWeather.name}</Card.Title>
                <Card.Text>{cityWeather.weather[0].description}</Card.Text>
                <Badge>{cityWeather.main.temp}</Badge>
                <Badge>{cityWeather.main.humidity}</Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default CityToday;
