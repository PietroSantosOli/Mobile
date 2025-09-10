import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232f3e",
  },
  header: {
    width: "100%", //Largura do cabeçalho
    paddingTop: 80, //Padding parte de cima
    alignItems: "center", //Alinhando no centro
    justifyContent: "center", //Justificando no centro
  },
  amazonLogoImg: {
    marginTop: -32, //Diminui a margem da imagem de cima aproximando as duas
    marginLeft: 30, //Joguei a imagem levemente para a esquerda
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
  },
  movieImageThumbnail:{
    width: "100%",
    alignItems: "center",
  },
  contentList:{
    paddingLeft:18,
    paddingTop:10
  },
  movieText:{
    fontSize:18,
    color:"#fff",
    fontWeight:"700",
    marginLeft: 20,
    marginTop: 15
  }
});