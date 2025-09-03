import { Image, TouchableOpacity } from "react-native";

export const MoviesCard = (props) => {
  return (
    <TouchableOpacity>
      <Image source={props.movieURL} />
    </TouchableOpacity>
    
  );
};
