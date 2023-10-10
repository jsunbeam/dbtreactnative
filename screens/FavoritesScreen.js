import { useSelector, useDispatch } from "react-redux";
import { cardsArray } from "../shared/cardsSlice";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import { ListItem } from "react-native-elements";
import { toggleFavorite } from "../redux/favoritesSlice";

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const renderFavoriteItem = ({ item: skill }) => {
    const intensity = skill.intensity;
    return (
      <SwipeRow rightOpenValue={-100}>
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() =>
              Alert.alert(
                "Delete Favorite?",
                "Are you sure you wish to delete this favorite?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log(skill.name + "Not Deleted"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => dispatch(toggleFavorite(skill.id)),
                  },
                ],
                { cancelable: false }
              )
            }
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ListItem
            onPress={() => navigation.navigate("Skills", { intensity })}
          >
            <ListItem.Content>
              <ListItem.Title>{skill.name}</ListItem.Title>
              <ListItem.Subtitle>{skill.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </SwipeRow>
    );
  };

  return (
    <FlatList
      data={cardsArray.filter((skill) => favorites.includes(skill.id))}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 100,
  },
});

export default FavoritesScreen;
