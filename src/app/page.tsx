import Link from "next/link";
import style from "./style.module.css";
import { getCurrentWeather } from "./utils/getCurrentWeather";

export default async function Home() {
  const res = await getCurrentWeather();
  console.log(res.current.condition.text);

  return (
    <div>
      <h1>main</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul">서울</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </div>
  );
}
