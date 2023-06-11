import { Card } from "antd";
export const Cards = ({ src, children }) => {

  return (
    <Card
      style={{
        maxWidth: 349,
        maxHeight: 359,
        backgroundColor:"#ffffff3b"
      }}
      cover={<img alt="example" src={src} />}
    >
      {children}
    </Card>
  );
};
