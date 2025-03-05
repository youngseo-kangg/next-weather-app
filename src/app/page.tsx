import Link from "next/link";
import style from "./style.module.css";

import { getCurrentWeather } from "./utils/getCurrentWeather";
import { getTime } from "./utils/getTime";
import RevalidateButton from "./components/RevalidateButton";

export default async function Home() {
  const res = await getCurrentWeather("Seoul");
  const time = await getTime("Seoul");

  return (
    <div>
      <h1>main</h1>
      <h2>{time.location.localtime}</h2>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li>
          <Link href="/new york?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </div>
  );
}
