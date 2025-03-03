import HomeButton from "../components/HomeButton";

type Props = {
  params: Promise<{
    location: string;
  }>;
};

export default async function Detail({ params }: Props) {
  const location = (await params).location;
  return (
    <>
      <h1>{location}의 3일 예보</h1>
      <HomeButton />
    </>
  );
}
