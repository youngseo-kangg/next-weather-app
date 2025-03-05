export interface Response {
  location: Location;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getTime = async (tz_id: string): Promise<Response> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/timezone.json?key=${API_KEY}&q=${tz_id}`,
    { next: { tags: ["time"] } }
  );

  if (!res.ok) throw new Error("시간 정보를 가져올 수 없습니다.");

  return res.json();
};
