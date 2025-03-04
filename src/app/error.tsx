"use client";
type Props = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  return (
    <article>
      <h1>에러페이지</h1>
      <div>{error.message}</div>
      <button onClick={() => reset}>새로 고침</button>
    </article>
  );
}
