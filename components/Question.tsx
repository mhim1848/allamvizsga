import CommentList from "./CommentList";
import RatingSystem from "./RatingSystem";
import Image from "next/image";
import { QuestionType } from "../types/QuestionType";

export default function Question(props: QuestionType) {
  const defaultRating = props.rating ? props.rating : 0;

  return (
    <>
      <h1>{props.qTitle}</h1>
      <p>{props.text}</p>
      {/* <p>{props.Image.at(0)!.imgLink}</p> */}
      <ul className="block m-8">
        {props.Image &&
          props.Image.map((imageDetails) => (
            <li key={imageDetails.id}>
              <Image src={imageDetails.imgLink} width={250} height={250} />
            </li>
          ))}
      </ul>
      <code>{props.code && props.code}</code>
      <RatingSystem rating={defaultRating} id={props.id} />
      <CommentList />
    </>
  );
}
