import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navhref = (props) => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <>
      <Link className={props.passClass} href={props.Link || "404"} >
        {props.children}
      </Link>
    </>
  );
};

export default Navhref;
