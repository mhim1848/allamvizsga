import Comment from "./Comment";

export default function CommentList() {
  const comments = [
    {
      id: 1,
      text: "Comment nr. 1",
      rating: 10,
    },
    {
      id: 2,
      text: "Comment nr. 2",
    },
  ];

  return (
    <>
      {comments?.length > 0 ?
      <ul className="block m-8">
        {comments.map((value) => (
          <li key={value.id} className="font-bold text-2xl">
            <Comment text={value.text} rating={value.rating}/>
          </li>
        ))}
      </ul> : <div><span>No comments were posted on this question yet.</span></div>
      }
    </>
  );
}
