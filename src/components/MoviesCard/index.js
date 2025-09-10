import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const MoviesCard = (props) => {
  return (
    <TouchableOpacity>
      <Image source={props.movieURL} style = {styles.img}/>
    </TouchableOpacity>
    
  );
};
