import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const data = [
  {
    id : 0,
    name: "ASUS Vivobook 15 Laptop, 15.6” FHD (1920 x 1080)",
    price: 353,
    desc: "  15.6 FHD (1920 x 1080) display with ultra-slim NanoEdge bezels Latest IntelCore i3-1215U Processor 1.2 GHz (10M Cache, up to 4.4 GHz, 6 cores) and Intel UHD Graphics",
    img: "https://m.media-amazon.com/images/I/71BVGVy9nQL._AC_UY218_.jpg",
  },
  {
    id : 1,
    name: "ASUS Vivobook 15 Laptop, 15.6” FHD (1920 x 1080)",
    price: 770,
    desc: "  15.6 FHD (1920 x 1080) display with ultra-slim NanoEdge bezels Latest IntelCore i3-1215U Processor 1.2 GHz (10M Cache, up to 4.4 GHz, 6 cores) and Intel UHD Graphics",
    img: "https://m.media-amazon.com/images/I/81VdqGTWeuL._AC_UY218_.jpg",
  },
  {
    id : 2,
    name: "ASUS Vivobook 15 Laptop, 15.6” FHD (1920 x 1080)",
    price: 72,
    desc: "  15.6 FHD (1920 x 1080) display with ultra-slim NanoEdge bezels Latest IntelCore i3-1215U Processor 1.2 GHz (10M Cache, up to 4.4 GHz, 6 cores) and Intel UHD Graphics",
    img: "https://m.media-amazon.com/images/I/71o7xHVdQaL._AC_UY218_.jpg",
  },
];

export default function CategoryCard() {
  return (
    <>
    {data.map((el,id) =>{
        return(
            <div key={id}>
                {console.log(id)}
                <Card style={{ width: "18rem" }} key = {el.id}>
        <Card.Img
          variant="top"
          src={el.img}
        />
        <Card.Body>
          <Card.Title>
            {el.name}
          </Card.Title>
          <h3>{el.price}$</h3>
          <Card.Text>
            {el.desc}
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      </div>
        )
    })}
    </>
  );
}
