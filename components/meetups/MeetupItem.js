import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
    // ye programmatically navigate karne k liye hai yaani bina Link tag ka use kiye kisi button ,
    // div kisi me bhi click kiye aur navigate kiye dusre page me yehi hai navigate karna programmatically,
    // yehi use hai useRouter.push ka.
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
