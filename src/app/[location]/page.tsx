import HomeButton from "../components/HomeButton";
import { getForecast } from "../utils/getForcast";

type Props = {
  params: Promise<{
    location: string;
  }>;
  searchParams: Promise<{ name: string }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const { name } = await searchParams;

  return {
    title: `날씨앱 - ${name}`,
    description: `${name}의 날씨를 알려드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const location = (await params).location;
  const name = (await searchParams).name;
  const res = await getForecast(location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
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
