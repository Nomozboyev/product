import "./btn.css";
export const Btn = ({clas ,props, pading }) => {
  return (
    <button className={clas} style={{ padding:  pading  }}>
      {props}
    </button>
  );
};
