import fonts from "../../theme/fonts";
import colors from "../../theme/colors";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: fonts.weight.bold
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,

  },
  icon: {
    marginHorizontal:5,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight:5,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },


})
