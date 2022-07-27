import RatingSystem from "./RatingSystem";

export default function Comment(props : {text: string; rating?: number}) {
  // Ezt ki kellene emelni közös szülőbe.
  const defaultRating = props.rating ? props.rating : 0;
  
  return (
        <>
          {/* <img src="../public/favicon.ico"></img> */}
          <label>{props.text}</label>
          {/* <RatingSystem rating={defaultRating} /> */}
        </>
      );
}