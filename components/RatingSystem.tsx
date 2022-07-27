import Image from "next/image";
import { useState, useEffect } from "react";

export default function RatingSystem(props: {rating: number, id: string}) {
    const [currRating, setCurrRating] = useState(props.rating);
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    
    useEffect(() => {
        const handleUpdate = async () => {
            const url = `/api/questions/${props.id}`;
            await fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    rating: currRating,
                })
            }).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            
            return response.json();
            })
        }

        handleUpdate();
    }, [currRating]);

    // update db on each like / dislike?
    const handleLikeClick = async () => 
    {
        if (!likeActive && !dislikeActive) {
            setCurrRating(currRating + 1);
        } else {
            if (likeActive) {
                setCurrRating(currRating - 1);
            } else {
                setCurrRating(currRating + 2);
                setDislikeActive(!dislikeActive);
            }
        }

        setLikeActive(!likeActive);
    }

    const handleDislikeClick = async () => {
        if (!dislikeActive && !likeActive) {
            setCurrRating(currRating - 1);
        } else {
            if (dislikeActive) {
                setCurrRating(currRating + 1);
            } else {
                setCurrRating(currRating - 2);
                setLikeActive(!likeActive);    
            }
        }
        
        setDislikeActive(!dislikeActive);
    }

    return (
        <div>
            <button onClick={() => handleLikeClick()}>
                <Image src="/upArrow.png" width={likeActive ? 128 : 64} height={likeActive ? 128 : 64} />
            </button>
            <label className="label">{currRating}</label>
            <button onClick={() => handleDislikeClick()}>
                <Image src="/downArrow.png" width={dislikeActive ? 128 : 64} height={dislikeActive ? 128 : 64} />
            </button>
        </div>
    );
}