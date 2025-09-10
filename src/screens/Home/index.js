import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import {styles} from "./styles"
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { ACABARAMCHEGAR } from "../../utils/acabaramChegar";
import { MoviesCard } from "../../components/MoviesCard";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source={AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>
{/* --------Botão Navegação-------- */}
      <View style={styles.category}>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>TV Shows</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>
<ScrollView>
{/* ------- Thumbnails ------- */}
      
        <Text style = {styles.movieText}>Acabaram de chegar</Text>
      <FlatList 
      data={ACABARAMCHEGAR} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL}/>}
      horizontal //deixa a lista de rolagem horizontal
      showsHorizontalScrollIndicator={false}
      style = {styles.contentList}
      />
      

<Text style = {styles.movieText}>Continue Assistindo...</Text>
      <FlatList 
      data={MOVIESWATCHING} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL}/>}
      horizontal //deixa a lista de rolagem horizontal
      showsHorizontalScrollIndicator={false}
      style = {styles.contentList}
      />
<Text style = {styles.movieText}>Assista em outro idioma</Text>
      <FlatList 
      data={MOVIESWATCH} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL}/>}
      horizontal //deixa a lista de rolagem horizontal
      showsHorizontalScrollIndicator={false}
      style = {styles.contentList}
      />
<Text style = {styles.movieText}>Filmes de crimes</Text>
      <FlatList 
      data={MOVIESCRIME} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL}/>}
      horizontal //deixa a lista de rolagem horizontal
      showsHorizontalScrollIndicator={false}
      style = {styles.contentList}
      />
    </ScrollView>
</View>
  );
};


