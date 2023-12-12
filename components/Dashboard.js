// Import necessary libraries
import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Import static images
import englishImage from "../assets/images/english.png";
import hindiImage from "../assets/images/hindi.png";
import mathImage from "../assets/images/math.png";

// Define the component
export default class ScrolledViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTextIndex: 1,
      searchTerm: "",
    };
  }

  onPressText(textIndex) {
    this.setState({ selectedTextIndex: textIndex });
  }

  renderChapters() {
    const { selectedTextIndex, searchTerm } = this.state;

    let chapters = [];

    switch (selectedTextIndex) {
      case 1: // English
        chapters = [
          {
            title: "Introduction to English",
            subtitle: "Chapter 1",
            image: englishImage,
            details:
              "This chapter covers the basics of the English language and its importance.",
          },
          {
            title: "Grammar Basics",
            subtitle: "Chapter 2",
            image: englishImage,
            details:
              "Explore the fundamental principles of English grammar for effective communication.",
          },
          {
            title: "Reading Comprehension",
            subtitle: "Chapter 3",
            image: englishImage,
            details:
              "Enhance your reading skills and comprehension with this chapter's exercises.",
          },
        ];
        break;
      case 2: // Hindi
        chapters = [
          {
            title: "Introduction to Hindi",
            subtitle: "Chapter A",
            image: hindiImage,
            details:
              "Learn the basics of the Hindi language, its script, and pronunciation.",
          },
          {
            title: "Grammar Fundamentals",
            subtitle: "Chapter B",
            image: hindiImage,
            details:
              "Understand the key principles of Hindi grammar to construct meaningful sentences.",
          },
          {
            title: "Hindi Literature",
            subtitle: "Chapter C",
            image: hindiImage,
            details:
              "Explore the rich literary heritage of Hindi with a focus on notable works.",
          },
        ];
        break;
      case 3: // Maths
        chapters = [
          {
            title: "Algebra Basics",
            subtitle: "Chapter X",
            image: mathImage,
            details:
              "Get introduced to the fundamental concepts of algebra and its applications.",
          },
          {
            title: "Geometry Fundamentals",
            subtitle: "Chapter Y",
            image: mathImage,
            details:
              "Explore the basic principles of geometry and geometric shapes.",
          },
          {
            title: "Trigonometry Concepts",
            subtitle: "Chapter Z",
            image: mathImage,
            details:
              "Understand trigonometric functions and their relevance in various fields.",
          },
        ];
        break;
      default:
        break;
    }

    // Filter chapters based on the search term
    if (searchTerm) {
      chapters = chapters.filter(
        (chapter) =>
          chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          chapter.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          chapter.details.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return chapters;
  }

  clearSearch() {
    this.setState({ searchTerm: "" });
  }

  renderTexts() {
    const textData = ["English", "Hindi", "Maths"];

    return (
      <View>
        <FlatList
          data={textData}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => this.onPressText(index + 1)}
              style={[
                styles.textContainer,
                {
                  backgroundColor:
                    this.state.selectedTextIndex === index + 1
                      ? "#0096C7"
                      : "#ecf0f1",
                },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      this.state.selectedTextIndex === index + 1
                        ? "#fff"
                        : "#000",
                    fontSize: 16,
                    fontFamily:
                      this.state.selectedTextIndex === index + 1
                        ? "Arial-BoldMT"
                        : "Arial",
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search chapters..."
            onChangeText={(text) => this.setState({ searchTerm: text })}
            value={this.state.searchTerm}
          />
          {this.state.searchTerm ? (
            <TouchableOpacity
              onPress={() => this.clearSearch()}
              style={styles.clearButton}
            >
              <Icon name="times" size={18} color="#555" />
            </TouchableOpacity>
          ) : null}
        </View>
        <FlatList
          data={this.renderChapters()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.chapterItem}>
              <Image
                source={item.image}
                style={styles.chapterImage}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.chapterTitle}>{item.title}</Text>
                <Text style={styles.chapterSubtitle}>{item.subtitle}</Text>
                <Text style={styles.chapterDetails}>{item.details}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.selectedSubjectText}>Select your subject</Text>
        </View>
        {this.renderTexts()}
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  selectedSubjectText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  textContainer: {
    width: 100,
    height: 40,
    padding: 10,
    margin: 8,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#ecf0f1",
  },
  clearButton: {
    marginLeft: 10,
  },
  chapterItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  chapterImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chapterSubtitle: {
    fontSize: 16,
    color: "#555",
  },
  chapterDetails: {
    fontSize: 14,
    color: "#777",
  },
});

// Skip this line if you are using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => ScrolledViewExample);
