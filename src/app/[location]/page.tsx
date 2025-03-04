import HomeButton from "../components/HomeButton";
import { getForecast } from "../utils/getForcast";

type Props = {
  params: Promise<{
    location: string;
  }>;
};

export default async function Detail({ params }: Props) {
  const location = (await params).location;
  const res = await getForecast(location);

  return (
    <>
      <h1>{location}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
