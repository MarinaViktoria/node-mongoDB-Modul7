import { AiFillEdit, AiFillDelete } from "react-icons/ai";
export const MyMeals = ({text, updatingInInput, deleteMyMeal}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}/>
            <AiFillDelete onClick={deleteMyMeal}/>
        </div>
    )
}
