import useFetchTags from "../Hooks/useFetchTags";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

export default function AllTags() {
  const [tags, loading] = useFetchTags();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-3">
      <h2 className="text-center">All Tags</h2>
      <Pagination itemsPerPage={16} items={tags} />
    </div>
  );
}
