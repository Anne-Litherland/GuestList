import useQuery from "./useQuery";

export default function GuestDetails({ guestId, setGuestId }) {
  const { date: guest, error } = useQuery("/guests/${guestId}");
  if (error) return <p>Whoops! {error}</p>;
  if (!guest) return <p>Loading...</p>;
  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <p>{guest.phone}</p>
      <p>{guest.email}</p>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
